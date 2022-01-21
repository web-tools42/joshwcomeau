class ReservationsController < ApplicationController
  def new
  end

  def show
    if current_user
      @upcoming = current_user.reservations.where("start_time > ?", DateTime.now)
      @past = current_user.reservations.where("start_time < ?", DateTime.now)
    else
      redirect_to new_session_path, alert: "Please log in first."
    end
  end

  def create


    @restaurant = Restaurant.find(params[:restaurant_id])

    @date_obj = format_date
    @requested_seats = params[:reservation][:seats].to_i
    
    params[:reservation][:start_time] = @date_obj
    params[:reservation][:restaurant_id] = params[:restaurant_id]
    params[:reservation][:user_id] = current_user.id

    @reservation = @restaurant.reservations.new(reservation_params)

    if in_the_past?
      # We're trying to make a booking in the past
      flash[:alert] = "You cannot book a reservation in the past!"
      redirect_to restaurant_path(@reservation.restaurant.id)
    elsif !check_availability
      flash[:alert] = "Oh no! No more seats left."
      redirect_to restaurant_path(@reservation.restaurant.id)
    elsif @reservation.save
      redirect_to reservations_path,  notice: "Resevation saved!"
    else
      flash[:alert] = "An unknown error has occured. Please try again later."
      redirect_to restaurant_path(@reservation.restaurant.id)
    end

  end



  def edit
    
    @restaurant = Restaurant.find_by(id:params[:restaurant_id])
    @reservation = Reservation.find_by(id:params[:id])

    @times_array = generate_times_array
    @dates_array = generate_dates_array



  end 

  def update


    @restaurant = Restaurant.find(params[:restaurant_id])

    @date_obj = format_date
    @requested_seats = params[:reservation][:seats].to_i
    
    params[:reservation][:start_time] = @date_obj
    params[:reservation][:restaurant_id] = params[:restaurant_id]

    @reservation = Reservation.find_by(id:params[:id])
    @reservation.attributes=(reservation_params)
    
    if in_the_past?
      # We're trying to make a booking in the past
      flash[:alert] = "You cannot book a reservation in the past!"
      redirect_to restaurant_path(@reservation.restaurant.id)
    elsif !check_availability
      flash[:alert] = "Oh no! No more seats left."
      redirect_to restaurant_path(@reservation.restaurant.id)
    elsif @reservation.save
      redirect_to reservations_path,  notice: "Resevation saved!"
    else
      flash[:alert] = "An unknown error has occured. Please try again later."
      redirect_to restaurant_path(@reservation.restaurant.id)
    end



  end 


  def destroy
    @reservation = Reservation.find(params[:id])
    if @reservation.delete
      redirect_to reservations_path, notice: "Reservation Deleted!"
    else
      redirect_to reservations_path, alert: "Could not delete reservation!"
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:user_id, :restaurant_id, :seats, :start_time)
  end

  def format_date
    
    r_year,r_throwaway,r_month,r_throwaway,r_day = params[:start_date].scan(/(....)(.)(..)(.)(..)/).flatten
    r_hour, r_min = params[:reservation][:start_time].scan(/../)

    DateTime.new(r_year.to_i,r_month.to_i,r_day.to_i,r_hour.to_i, r_min.to_i)

  end


  def check_opening

    @date_obj >= @restaurant.opening_hour.strftime("%I:%M%p") && @date_obj < @restaurant.closing_hour.strftime("%I:%M%p")

  end 

  def check_availability 
    # Check how many seats are available at every slice of time during the reservation, based on our two constants.
    reservation_slice = @date_obj - @restaurant.reservation_length_minutes.minutes + TIME_INCREMENT

    until reservation_slice > @date_obj
      reserved_count = @restaurant.reservations.where("start_time >= ?", reservation_slice).where("start_time < ?", reservation_slice + @restaurant.reservation_length_minutes.minutes).sum(:seats)
      return false if reserved_count + @requested_seats > @restaurant.capacity
      reservation_slice += TIME_INCREMENT
    end
    true
  end

  def in_the_past?
    params[:reservation][:start_time] < Time.now
  end

  # Scenario: Booked solid at 11pm, so I should be able to book at 9:30, but I can't.
  # @date_obj = 9:30.
  # reservation_slice = 9:30 - 1:30 + 0:30 = 7:30

  # Until reservation_slice >= 11:00
  #   reserved_count = start_time >= 7:30 && start_time < 9:00

  # Loop until reservation_slice == 10:30

  #   reserved_count = start_time >= 10:30





  # date_obj = 7:00 PM
  # reservation_slice starts at 6:00 PM

  # Until reservation slice >= 8:30:
  # Iteration 1: where start <= 6:00

end











