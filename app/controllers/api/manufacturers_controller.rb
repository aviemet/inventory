class Api::ManufacturersController < Api::ApiController
  expose :manufacturers, -> { @active_company.manufacturers }
  expose :manufacturer, id: ->{ params[:slug] }, scope: ->{ @active_company.manufacturers.includes_associated }, find_by: :slug

  strong_params :manufacturer, permit: [:name]

  # @route GET /api/manufacturers (api_manufacturers)
  def index
    render json: manufacturers.includes_associated.render
  end

  # @route GET /api/manufacturers/:id (api_manufacturer)
  def show
    render json: manufacturers.render
  end

  # @route GET /api/options/manufacturers (api_manufacturers_options)
  def options
    render json: manufacturers.render(view: :options)
  end

  # @route POST /api/manufacturers (api_manufacturers)
  def create
    manufacturer.company = @active_company

    if manufacturer.save
      render json: manufacturer.render, status: :created
    else
      render json: { errors: manufacturer.errors }, status: :see_other
    end
  end

  # @route PATCH /api/manufacturers/:id (api_manufacturer)
  # @route PUT /api/manufacturers/:id (api_manufacturer)
  def update
    if manufacturer?.update(manufacturer_params)
      render json: manufacturer.render, status: :created
    else
      render json: { errors: manufacturer.errors }, status: :see_other
    end
  end

  private
end
