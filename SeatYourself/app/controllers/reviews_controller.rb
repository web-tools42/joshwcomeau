class ReviewsController < ApplicationController
	before_filter :load_restaurant
    def create

        @review = @restaurant.reviews.new(review_params)

        if @review.save
			redirect_to restaurant_path(@restaurant), notice: "Review saved!"
		else
			redirect_to restaurant_path(@restaurant), alert: "Please fill in all fields before submitting a review"
		end


    end 

    private

    def review_params

        params.require(:review).permit(:title,:content,:rating,:user_id)
    end 

    def load_restaurant
    	@restaurant = Restaurant.find(params[:restaurant_id])
    end

end
