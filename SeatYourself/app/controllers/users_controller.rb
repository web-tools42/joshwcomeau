class UsersController < ApplicationController

    def new
    
        @user = User.new

    end 


    def create

        @user = User.new(user_params)

        if @user.save
            # log in!
            session[:user_id] = @user.id

            redirect_to restaurants_path, flash: {registration_success: "Registration successful. Welcome to SeatYourself #{@user.first_name.capitalize}!"}

        else

            render :new

        end

    end

    def show

        @upcoming = current_user.reservations.where("start_time > ?", DateTime.now)
        @past = current_user.reservations.where("start_time < ?", DateTime.now)

        @restaurants_owned = current_user.restaurants_owned

    end 

    def destroy
    end 

    private

    def user_params

        params.require(:user).permit(:email,:password,:password_confirmation,:first_name,:last_name,:user_type,:active_status)

    end

end
