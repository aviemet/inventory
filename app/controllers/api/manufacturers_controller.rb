class Api::ManufacturersController < Api::ApiController
  expose :manufacturer, id: ->{ params[:slug] }, scope: ->{ @active_company.manufacturers.includes_associated }, find_by: :slug

  # POST /api/manufacturers
  def create
    manufacturer.company = @active_company

    if manufacturer.save
      render json: manufacturer.render, status: 201
    else
      render json: { errors: manufacturer.errors }, status: 303
    end
  end

  # PATCH/PUT /api/manufacturers/:id
  def update
    if manufacturer?.update(manufacturer_params)
      render json: manufacturer.render, status: 201
    else
      render json: { errors: manufacturer.errors }, status: 303
    end
  end

  private

  def manufacturer_params
    params.require(:manufacturer).permit(:name)
  end
end
