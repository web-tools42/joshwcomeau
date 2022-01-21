class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  RESERVATION_LENGTH = 1.5.hours
  TIME_INCREMENT = 0.5.hours


  def authenticated?
    current_user
  end 

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  helper_method :authenticated?
  helper_method :current_user



  def generate_times_array

    times = []

    current_slice = @restaurant.opening_hour

    until current_slice > (@restaurant.closing_hour - RESERVATION_LENGTH) do
      times << [current_slice.strftime("%l:%M %P"), current_slice.strftime("%H%M") ]
      current_slice += TIME_INCREMENT
    end
    times
  end


  def generate_dates_array
    dates = []
    date = Date.today

    # Add today and tomorrow manually; they're special cases
    dates << ["Today", date.strftime("%Y-%m-%d")]
    date += 1
    dates << ["Tomorrow", date.strftime("%Y-%m-%d")]
    date += 1

    20.times do 
      dates << [date.strftime("%A, %B %-d"), date.strftime("%Y-%m-%d")]
      date += 1
    end
    dates
  end

  def round_time
    Time.at((Time.now.to_f / 30.minutes).ceil * 30.minutes)
  end


end
