class ReviewsController < ApplicationController

  def create
    @product = Product.find(params[:product_id])
    @review = @product.reviews.new(review_params)
    @review.user_id = current_user.id
    
    if @review.save
      redirect_to product_path(@product), :notice => "Review added!"
    else
      redirect_to product_path(@product), :alert => "Review not added"
    end
  end


  private

  def review_params
    params.require(:review).permit(:comment, :product_id, :user_id)
  end
end
