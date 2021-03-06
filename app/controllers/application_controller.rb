class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  add_flash_types :info, :error

  before_action :set_locale
  before_action :authenticate_user!
  before_action :set_action_cable_identifier
  before_action :set_active_company
  before_action :redirect_empty_params

  # rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  # rescue_from CanCan::AccessDenied do |exception|
  #   flash[:warning] = exception.message
  #   redirect_to root_path
  # end
  # raise CanCan::AccessDenied.new("You are not authorized to perform this action!", :custom_action, Project)

  def after_sign_out_path_for(*)
    new_user_session_path
  end

  protected

  def set_active_company(company = nil)
    return if !current_user

    current_user.active_company = company if company

    if current_user.companies.count > 0
      current_user.update(active_company: current_user.companies.first) if !current_user.active_company

      @active_company = current_user.active_company
    end
  end

  # def current_user
  #   UserDecorator.decorate(super) unless super.nil?
  # end

  private

  def set_locale
    locale = params[:locale].to_s.strip.to_sym
    I18n.locale = I18n.available_locales.include?(locale) ? locale : I18n.default_locale
  end

  def record_not_found
    raise ActionController::RoutingError, 'Not Found'
  end

  def set_action_cable_identifier
    cookies.encrypted[:user_id] = current_user&.id
  end

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
    redirect_to(params.permit(*query_string_params)) if dirty
  end
end
