module Api
	class ManufacturersController < ApplicationController
		respond_to :json

		def index
			respond_with(Manufacturer.all)	
		end

		def show
			respond_with(Manufacturer.find(params[:id]))
		end
	end
end