class PhotosController < ApplicationController
  def index
    @photos = Photo.before(3.days.ago)
  end

  def show
    @photo = Photo.find(params[:id])
    # get related comments
    @comments = @photo.comments
    @comment = Comment.new
  end

  def edit
    @photo = Photo.most_recent_five
  end

  def update
    @photo = Photo.find(params[:id])
    if @photo.update_attributes(photo_params)
      redirect_to photo_path(@photo)
    else
      render :edit
    end
  end

  def new 
    @photo = Photo.new
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      redirect_to photos_path
    else
      render :new
    end
  end

  def destroy 
    @photo = Photo.find(params[:id])
    if @photo.delete
      redirect_to photos_path
    else
      render :show
    end
  end


  private
  def photo_params
    params.require(:photo).permit(:title, :uploader, :url)
  end
end
