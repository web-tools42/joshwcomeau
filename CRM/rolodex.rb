class Rolodex
  def initialize
    @contacts = []
  end

  def new_contact(name, email, notes)
    @contacts << Contact.new(name, email, notes)
  end

  def view_contacts
    @contacts.each { |contact| puts contact }
  end

  def delete_contact(id)
    @contacts.delete_if { |contact| contact.id == id }
  end

  def grab_contact(id)
    @contacts.find { |c| c.id == id }
  end

  def show_contact_details(id)
    index = 1
    contact = grab_contact(id)

    contact.build_contact_hash # re-compile contact hash to account for updated details
    contact.attributes.each do 
      |k, v| puts "( #{index} ) #{k}: " + v
      index += 1
    end
  end

  def user_exists?(id)
    @contacts.detect { |c| c.id == id }
  end

  def update_name(id, name)
    contact = grab_contact(id)
    contact.name = name

    contact.modified = Time.new
  end

  def update_email(id, email)
    contact = grab_contact(id)
    contact.email = email

    contact.modified = Time.new
  end

  def update_notes(action, id, notes)
    contact = grab_contact(id)
    if action == 'append'
      contact.notes += "\n- " + notes.to_s
    elsif action == 'overwrite'
      contact.notes = "- " + notes.to_s
    end
    contact.modified = Time.new
  end

  def find_contacts(search)
    matching_contacts = @contacts.select do |c| 
      puts c.attributes
      c.attributes.any? { |key, c_field| c_field.include?(search) }
    end

    if matching_contacts.length != 0
      puts "===============\nFound the following #{matching_contacts.length} results:"
      matching_contacts.each { |c| puts c }
    else
      puts "Sorry, no results found."
    end
  end



end