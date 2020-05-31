class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  private

  def record_not_found
    raise ActionController::RoutingError.new('Not Found')
  end
end
