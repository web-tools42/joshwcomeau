class MixesController < ApplicationController
  def index
    @mixes = params[:keywords] ? Mix.where('name ilike ?',"%#{params[:keywords]}%") : []

    render json: @mixes
  end

  def show
    @mix = Mix.find(params[:id])
    render json: @mix

  end
end
