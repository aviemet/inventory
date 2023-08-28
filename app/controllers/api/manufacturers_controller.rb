class Api::ManufacturersController < Api::ApiController
  expose :manufacturers, -> { @active_company.manufacturers }
  expose :manufacturer, id: ->{ params[:slug] }, scope: ->{ @active_company.manufacturers.includes_associated }, find_by: :slug

  # GET api/manufacturers/options
  def index
    render json: manufacturers.includes_associated.render
  end

  # GET api/manufacturers/:slug
  def show
    render json: manufacturers.render
  end

  # GET api/options/manufacturers
  def options
    render json: manufacturers.render(view: :options)
  end

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
