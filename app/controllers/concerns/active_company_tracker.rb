require "active_support/concern"

module ActiveCompanyTracker
  extend ActiveSupport::Concern

  included do
    before_action :set_active_company
  end

  private

  # Changes active company for user if provided
  # Sets @active_company on Controller
  # Redirects to complete_registration_path if no company exists for the current_user
  def set_active_company
    return if !current_user

    if current_user.active_company
      @active_company = current_user.active_company
    elsif ["/logout", "/users/complete_registration"].exclude?(request.path)
      redirect_to complete_registration_path
    end
  end
end
