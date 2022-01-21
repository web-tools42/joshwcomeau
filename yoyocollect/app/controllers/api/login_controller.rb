module Api
	class LoginController < ApplicationController
		respond_to :json

		def authenticate
			@user = User.where(email: params[:user][:email]).last

			if @user && @user.authenticate(params[:user][:password])
				render json: {
					token: @user.api_key.access_token,
					email: @user.email
				}, status: 200
			else 
				render json: {
					message: "Username or password not valid"
				}, status: 500
			end
		end
	end
end