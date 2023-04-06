class Api::LocationsController < ApplicationController
  expose :loc, id: ->{ params[:slug] }, scope: ->{ @active_company.items.includes_associated }, find_by: :slug

  # POST /api/locations
  def create
    loc.company = @active_company

    if loc.save
      render json: LocationBlueprint.render_as_json(loc), status: 201
    else
      render json: { errors: loc.errors }, status: 303
    end
  end

  # PATCH/PUT /api/locations/:id
  def update
    if loc.update(location_params)
      render json: LocationBlueprint.render_as_json(loc), status: 201
    else
      render json: { errors: loc.errors }, status: 303
    end
  end

  private

  def location_params
    params.require(:location).permit(:name, :currency, :parent_id)
  end
end
