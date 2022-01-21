module Api
	class YoyosController < ApplicationController
		respond_to :json

		def index
			@manufacturers = Manufacturer.all
			render :json => @manufacturers.to_json(:include => [:yoyos]), status: 200
		end

		def show
			respond_with Yoyo.find(params[:id])
		end

		def create
			@yoyo = Yoyo.new(yoyo_params)

			if params[:manufacturer]
				@yoyo.manufacturers = [ Manufacturer.find( params[:manufacturer] ) ]
			elsif params[:manufacturers]
				params[:manufacturers].each do |m|
					@yoyo.manufacturers << Manufacturer.find(m)
				end
			end
			
			if @yoyo.save
				render json: @yoyo 
				
			end
		end

		def update
			if stored_key?
				@yoyo = Yoyo.find(params[:id])

				if @yoyo.update(yoyo_params)
					render json: @yoyo, status: 200
				else
					render status: 500
				end
			else
				render status: 500
			end
		end


		private

		def yoyo_params
			params.require(:yoyo).permit(:model, :diameter, :width, :weight)
		end


		
	end
end
