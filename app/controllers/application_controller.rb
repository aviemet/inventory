class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  before_action :authenticate_user!

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  # rescue_from CanCan::AccessDenied do |exception|
  #   flash[:warning] = exception.message
  #   redirect_to root_path
  # end
  # raise CanCan::AccessDenied.new("You are not authorized to perform this action!", :custom_action, Project)

  def default_url_options
    current_user.update(active_company: current_user.companies.first) unless current_user.active_company
    { company: current_user.active_company || current_user.companies.first }
  end

  private

  def record_not_found
    raise ActionController::RoutingError, 'Not Found'
  end
end
