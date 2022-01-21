class ProductsController < ApplicationController
  before_filter :ensure_logged_in, :only => [:edit, :new]
  before_filter :load_product, :except => [:index, :new, :create]

  def index
    @products = if params[:search]
      Product.where("name ILIKE ?", "%#{params[:search]}%")
    else 
      Product.order("id")
    end

    if request.xhr?
      render partial: "product", collection: @products
    end

  end

  def show
    @review = @product.reviews.new
  end

  def edit
  end

  def update
    if current_user.id == @product.user_id
      if @product.update_attributes(product_params)
        redirect_to product_path(@product)
      else
        render :edit
      end
    else
      redirect_to product_path(@product), :alert => "You do not have permission to update this item."
    end
  end

  def new
    @product = Product.new
  end

  def create
    @product = current_user.products.new(product_params)
    if @product.save
      redirect_to product_path(@product)
    else
      render :new
    end
  end

  def destroy
    if current_user.id == @product.user_id
      @product.destroy
      redirect_to products_path
    else
      redirect_to product_path(@product), :alert => "You do not have permission to delete this item."
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :price)
  end

  def load_product
    @product = Product.find(params[:id])
  end
end











