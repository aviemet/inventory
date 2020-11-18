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

  # GET /partials/dropdown/:model/(:company_id)
  def dropdown
    raise ActionController::RoutingError, 'Not Found' unless dropdown_model_allowed(params[:model])

    # :company_id means a request for model other than Company
    if params.key? :company_id
      @company = Company.find(params[:company_id])
      @model = params[:model].downcase
      render partial: "shared/dropdowns/dropdown"
    else
      render partial: "shared/dropdowns/company_dropdown"
    end
  end

  private

  def partial_exists?
    q = request.query_parameters
    File.exist?(Pathname.new(Rails.root + "app/views/partials/#{q[:partial]}.html.erb"))
  end

  def dropdown_model_allowed(model)
    %w(department location item license accessory consumable network person vendor manufacturer company).include? model
  end
end
