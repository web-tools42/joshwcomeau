class Admin::ApplicationController < ApplicationController
  before_action :require_admin
  layout 'application_admin'
  private

  def require_admin
    redirect_to root_path unless current_user.admin?
  end

end
