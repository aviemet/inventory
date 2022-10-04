class Api::LocationsController < ApplicationController
  expose :location, -> { @active_company.locations.find_by_slug(params[:slug]) || Location.new(location_params) }

  # POST /api/locations
  def create
    location.company = @active_company

    if location.save
      render json: LocationBlueprint.render_as_json(location), status: 201
    else
      render json: { errors: location.errors }, status: 303
    end
  end

  # PATCH/PUT /api/locations/:id
  def update
    if location.update(location_params)
      render json: LocationBlueprint.render_as_json(location), status: 201
    else
      render json: { errors: location.errors }, status: 303
    end
  end

  private

  def location_params
    params.require(:location).permit(:name, :currency, :parent_id)
  end
end
