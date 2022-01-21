module Api
	class UsersController < ApplicationController
		respond_to :json

		def create
			@user = User.new(user_params)

			if @user.save
				render json: {
					saved: "true",
					status: 200
				}
			else
				render json: {
					saved: "false",
					status: 500
				}
			end

		end


		private

		def user_params
			params.require(:user).permit(:email, :password, :password_confirmation)
		end

	end
end