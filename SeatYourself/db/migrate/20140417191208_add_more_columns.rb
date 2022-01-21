class AddMoreColumns < ActiveRecord::Migration
  def change

    add_column :dummyrestaurants, :cuisine, :string
    add_column :dummyrestaurants, :address, :string

  end
end
