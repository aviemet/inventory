class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  add_flash_types :info, :error

  before_action :authenticate_user!
  before_action :set_active_company

  # rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  # rescue_from CanCan::AccessDenied do |exception|
  #   flash[:warning] = exception.message
  #   redirect_to root_path
  # end
  # raise CanCan::AccessDenied.new("You are not authorized to perform this action!", :custom_action, Project)

  private

  def set_active_company
    return if !current_user

    if current_user.companies.count > 0
      current_user.active_company = current_user.companies.first if !current_user.active_company

      @active_company = current_user.active_company
    end
  end

  def record_not_found
    raise ActionController::RoutingError, 'Not Found'
  end
end
