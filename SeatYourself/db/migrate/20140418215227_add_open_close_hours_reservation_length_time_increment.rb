class AddOpenCloseHoursReservationLengthTimeIncrement < ActiveRecord::Migration
  def change

    add_column :restaurants, :opening_hour, :time
    add_column :restaurants, :closing_hour, :time
    add_column :restaurants, :reservation_length_minutes, :integer

  end
end
