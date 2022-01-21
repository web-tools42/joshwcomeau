require 'spec_helper'

describe Reservation do
  # pending "add some examples to (or delete) #{__FILE__}"

  let(:restaurant) { Restaurant.first }

  # it "Should add the reservation successfully" do
  #   reservation = restaurant.reservations.build(start_time: DateTime(2014,4,17,19,30), seats: 12 )
  #   reservation.restaurant.name.should == "The Keg"
  # end

  it "Should not let me book more than the available capacity for a restaurant" do
  	expect { restaurant.reservations.build(start_time: DateTime(2014,4,17,19,30), seats: 50 ) }.to raise_error
  end

end
