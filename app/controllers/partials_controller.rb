class PartialsController < ApplicationController
  layout false

  # GET /partials/dropdown/:model/(:company_id)
  # :model should be plural
  def dropdown
    raise ActionController::RoutingError, 'Not Found' unless dropdown_model_allowed(params[:model].singularize)

    if params.key? :company_id
      @company = Company.find(params[:company_id])
      @model = params[:model].downcase.singularize
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
