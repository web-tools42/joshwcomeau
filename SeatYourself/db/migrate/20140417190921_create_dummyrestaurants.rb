class CreateDummyrestaurants < ActiveRecord::Migration
  def change
    create_table :dummyrestaurants do |t|

        t.string :name
        t.text :description
        t.text :display_image_url
        t.string :location

      t.timestamps
    end
  end
end
