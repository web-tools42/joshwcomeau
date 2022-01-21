class CommentsController < ApplicationController

  def index; end # non-applicable
  def show; end # non-applicable

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.save
    redirect_to photo_path(params[:comment][:photo_id])
  end

  def destroy 
    @comment = Comment.find(params[:id])
    if @comment.delete
      redirect_to photos_path
    else
      render :show
    end
  end
  private
  def comment_params
    params.require(:comment).permit(:author, :content, :photo_id)
  end
end
