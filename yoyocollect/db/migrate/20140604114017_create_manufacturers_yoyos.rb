class CreateManufacturersYoyos < ActiveRecord::Migration
  def change
    create_table :manufacturers_yoyos, id: false do |t|
    	t.belongs_to :manufacturer
    	t.belongs_to :yoyo
    end
  end
end
