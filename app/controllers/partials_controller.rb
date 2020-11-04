class PartialsController < ApplicationController
  layout false

  def show
    if partial_exists?
      q = request.query_parameters
      @company_id = params[:company_id]
      render template: "partials/#{q[:partial]}"
    else
      raise ActionController::RoutingError, 'Not Found'
    end
  end

  # GET /partials/dropdown/:company_id/:model
  def dropdown
    raise ActionController::RoutingError, 'Not Found' unless dropdown_model_allowed(params[:model])
    
    @company = Company.find(params[:company_id])
    @model_string = params[:model].downcase
    @model = params[:model].capitalize.constantize
    render template: "partials/dropdown"
  end

  # GET /partials/dropdown/company
  def company_dropdown
    @companies = current_user.companies
    render template: "partials/company_dropdown"
  end

  private

  def partial_exists?
    q = request.query_parameters
    File.exist?(Pathname.new(Rails.root + "app/views/partials/#{q[:partial]}.html.erb"))
  end

  def dropdown_model_allowed(model)
    %w(department location item license accessory consumeable network person vendor purchase manufacturer model company).include? model
  end
end
