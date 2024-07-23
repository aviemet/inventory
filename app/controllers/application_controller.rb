class ApplicationController < ActionController::Base
  include Authentication
  include Authorization
  include InertiaCsrf
  include Localization
  include InertiaShare::Flash
  include InertiaShare::Auth
  include Searchable
  include ActiveCompanyTracker
  include StrongParams

  # before_action :decode_id

  # rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  private

  def first_run
    redirect_to first_run_path if User.count == 0
  end

  # def decode_id
  #   return if !params[:id]

  #   id_parts = ApplicationRecord.decode_id(params[:id])
  #   params[:id] = id_parts[:id]
  #   params[:asset_type] = id_parts[:model]
  # end

  # def record_not_found
  #   raise ActionController::RoutingError, 'Not Found'
  # end
end
