class CreateMixes < ActiveRecord::Migration
  def change
    create_table :mixes do |t|
      t.string :name
    
      t.text :audio_url
      t.integer :length

      t.text :photo_url

      t.integer :played
      t.integer :liked
      t.integer :downloaded
      t.timestamps
    end
  end
end
