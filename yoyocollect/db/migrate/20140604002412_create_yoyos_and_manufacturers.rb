class CreateYoyosAndManufacturers < ActiveRecord::Migration
  def change
    create_table :yoyos do |t|
    	t.string :model
    	t.decimal :diameter
    	t.decimal :width
    	t.decimal :weight

      t.timestamps
    end

    create_table :manufacturers do |t|
      t.string :name
      t.string :image_url

      t.timestamps
    end
  end
end
