class PartialsController < ApplicationController
  layout false

  # GET /partials/dropdown/company?(name=:name)
  def company_dropdown
    @input_name = params[:name] ? params[:name] : "company_id"

    render partial: "shared/dropdowns/company_dropdown"
  end

  # GET /partials/dropdown/:model/(:company_id)?(name=:name)
  def dropdown
    raise ActionController::RoutingError, 'Not Found' unless dropdown_model_allowed(params[:model].singularize)

    company = params[:company_id] ? Company.find(params[:company_id]) : @active_company
    @model_name = params[:model].downcase.singularize

    @input_name = params[:name] ? params[:name] : "#{@model_name}_id"
    @display_field = @model_name.capitalize.constantize.to_s_field
    @models = company.public_send(@model_name.pluralize).order(@display_field)
  end

  private

  def partial_exists?
    q = request.query_parameters
    File.exist?(Pathname.new(Rails.root + "app/views/partials/#{q[:partial]}.html.erb"))
  end

  def dropdown_model_allowed(model)
    %w(department location item license accessory consumable network person vendor manufacturer).include? model
  end
end
