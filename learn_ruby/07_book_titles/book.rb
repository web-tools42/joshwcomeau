class Book
  attr_reader :title



  def initialize
    @no_caps = ['the','a','an','and', 'in','of']
  end

  def title=(title)
    arr = title.split(" ")

    arr[0].capitalize!
    
    arr.map! do |word| 
      if !@no_caps.include?(word)
        word.capitalize 
      else
        word
      end
    end
    
    title = arr.join(" ")
    @title = title
  end
end