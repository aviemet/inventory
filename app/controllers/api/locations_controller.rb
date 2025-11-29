class Api::LocationsController < Api::ApiController
  expose :locations, -> { @active_company.locations }
  expose :loc, id: ->{ params[:slug] }, scope: ->{ @active_company.items.includes_associated }, find_by: :slug

  # @route GET /api/locations (api_locations)
  def index
    render json: locations.includes_associated.render
  end

  # @route GET /api/locations/:slug (api_location)
  def show
    render json: loc.render
  end

  # @route GET /api/options/locations (api_locations_options)
  def options
    render json: locations.render(view: :options)
  end

  # @route POST /api/locations (api_locations)
  def create
    loc.company = @active_company

    if loc.save
      render json: loc.render, status: :created
    else
      render json: { errors: loc.errors }, status: :see_other
    end
  end

  # @route PATCH /api/locations/:slug (api_location)
  # @route PUT /api/locations/:slug (api_location)
  def update
    if loc.update(location_params)
      render json: loc.render, status: :created
    else
      render json: { errors: loc.errors }, status: :see_other
    end
  end

  private

  def location_params
    params.expect(location: [:name, :currency, :parent_id])
  end
end
