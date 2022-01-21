class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  def index

  end

  def fetch_token
  	request.headers[:HTTP_AUTHORIZATION]
  end

  def stored_key?
  	fetch_token.present?
  end

end
