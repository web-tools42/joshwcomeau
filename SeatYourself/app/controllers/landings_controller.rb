class LandingsController < ApplicationController

    def index

        @restaurants = Dummyrestaurant.all

    end 

end
