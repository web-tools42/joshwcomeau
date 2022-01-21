class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.belongs_to :restaurant
      t.belongs_to :user

      t.datetime :start_time
      t.integer  :seats



      t.timestamps
    end
  end
end
