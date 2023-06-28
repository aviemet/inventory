class Api::LocationsController < Api::ApiController
  expose :locations, -> { @active_company.locations }
  expose :loc, id: ->{ params[:slug] }, scope: ->{ @active_company.items.includes_associated }, find_by: :slug

  # GET api/locations/options
  def index
    render json: locations.includes_associated.render
  end

  # GET api/locations/:slug
  def show
    render json: loc.render
  end

  # GET api/options/locations
  def options
    render json: locations.render(view: :options)
  end

  # POST /api/locations
  def create
    loc.company = @active_company

    if loc.save
      render json: loc.render, status: 201
    else
      render json: { errors: loc.errors }, status: 303
    end
  end

  # PATCH/PUT /api/locations/:id
  def update
    if loc.update(location_params)
      render json: loc.render, status: 201
    else
      render json: { errors: loc.errors }, status: 303
    end
  end

  private

  def location_params
    params.require(:location).permit(:name, :currency, :parent_id)
  end
end
