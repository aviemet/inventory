class Api::ManufacturersController < ApplicationController
  # POST /api/manufacturers
  def create
    manufacturer = Manufacturer.new(manufacturer_params)
    manufacturer.company = @active_company

    if manufacturer.save
      render json: ManufacturerBlueprint.render_as_json(manufacturer), status: 201
    else
      render json: { errors: manufacturer.errors }, status: 303
    end
  end

  # PATCH/PUT /api/manufacturers/:id
  def update
    manufacturer = @active_company.manufacturers.find_by_slug params[:slug]

    if manufacturer?.update(manufacturer_params)
      render json: ManufacturerBlueprint.render_as_json(manufacturer), status: 201
    else
      render json: { errors: manufacturer.errors }, status: 303
    end
  end

  private

  def manufacturer_params
    params.require(:manufacturer).permit(:name)
  end
end
