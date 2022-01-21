class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to projects_path, notice: "Signed up!"
    else
      render :new
    end
  end

  def show 
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end 
end

