class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by("username = ?", params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to products_path, :notice => "Logged in!"
    else
      flash[:alert] = "Invalid login details. Please try again."
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to products_path, :notice => "Logged out."
  end
end
