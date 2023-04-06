class Api::ItemsController < ApplicationController
  def index
    render json: @active_company.items.render(view: :options_with_ip)
  end

  def update
    if location.update(location_params)
      render json: LocationBlueprint.render_as_json(location), status: 201
    else
      render json: { errors: location.errors }, status: 303
    end
  end
end
