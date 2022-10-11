class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # Inertia requests do not need authenticity verification as they are not
  # subject to the same vulnerability as a standard web request
  skip_before_action :verify_authenticity_token, if: -> { request.inertia? }

  add_flash_types :success, :error, :warning

  # before_action :decode_id
  before_action :set_locale
  before_action :authenticate_user!
  # before_action :set_action_cable_identifier
  before_action :set_active_company
  before_action :redirect_empty_params

  # rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  include Inertia::Flash
  include Inertia::Auth

  # rescue_from CanCan::AccessDenied do |exception|
  #   flash[:warning] = exception.message
  #   redirect_to root_path
  # end
  # raise CanCan::AccessDenied.new("You are not authorized to perform this action!", :custom_action, Project)

  def after_sign_out_path_for(*)
    new_user_session_path
  end

  protected

  # Changes active company for user if provided
  # Sets @active_company on Controller
  # Redirects to complete_registration_path if no company exists for the current_user
  def set_active_company
    return if !current_user

    if current_user.companies.size > 0
      # TODO: This may be a stop-gap measure. May want to redirect to a view with choices to be more explicit
      if !current_user.active_company
        current_user.update(active_company: current_user.companies.first)
      end

      @active_company = current_user.active_company
    elsif !['/logout', '/users/complete_registration'].include? request.path
      redirect_to complete_registration_path
    end
  end

  def pagination_data(model)
    return if !model.respond_to? :total_pages
    {
      pages: model.total_pages,
      limit: model.limit_value,
      current_page: model.current_page,
      next_page: model.next_page,
      prev_page: model.prev_page,
      is_first_page: model.first_page?,
      is_last_page: model.last_page?
    }
  end

  def host_pagination_data(address)
    size = network&.address&.size
    pages =  (size / 256).to_i
    limit = params[:limit] || 256
    current_page = params[:page].to_i || 1

    {
      pages: pages,
      limit: limit,
      current_page: current_page,
      next_page: current_page + 1 > pages ? nil : current_page + 1,
      prev_page: current_page - 1 < 0 ? nil : current_page - 1,
      is_first_page: current_page == 1,
      is_last_page: current_page == pages
    }
  end

  def currencies
    Monetize::Parser::CURRENCY_SYMBOLS.map{ |sym, abbr| { symbol: sym, code: abbr } }
    # Money::Currency.table.values.map{ |c| { symbol: c[:symbol], code: c[:iso_code] } }
  end

  private

  def decode_id
    return if !params[:id]

    id_parts = ApplicationRecord.decode_id(params[:id])
    params[:id] = id_parts[:id]
    params[:asset_type] = id_parts[:model]
  end

  def set_locale
    locale = params[:locale].to_s.strip.to_sym
    I18n.locale = I18n.available_locales.include?(locale) ? locale : I18n.default_locale
  end

  # def record_not_found
  #   raise ActionController::RoutingError, 'Not Found'
  # end

  # def set_action_cable_identifier
  #   cookies.encrypted[:user_id] = current_user&.id
  # end

  # param `model` is a base model to check field types on
  # if `column` is in the form 'model.field', or further chained such as 'model1.model2.field',
  # ignore the passed `model` param and use the last chained model sent in `column`
  def field_type(model, column)
    split_fields = column.split(".")
    if split_fields.length > 1
      model = split_fields[-2].titleize.singularize.constantize
    end
    model.column_for_attribute(column).type
  end

  def redirect_empty_params
    dirty = false

    query_string_params = [:search, :sort, :direction]
    query_string_params.each do |key|
      next unless params.key?(key) && params[key].blank?

      dirty = true
      params.delete key
    end

    if params.key?(:direction) && !params.key?(:sort)
      dirty = true
      params.delete :direction
    end

    redirect_to request.path, params: params if dirty
  end
end
