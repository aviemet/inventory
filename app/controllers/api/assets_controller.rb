class Api::AssetsController < Api::ApiController
  expose :assets, -> {  @active_company.assets }
  expose :asset, scope: ->{ @active_company.assets }

  # GET api/assets/options
  def index
    render json: assets.includes_associated.render
  end

  # GET api/assets/:slug
  def show
    render json: asset.render
  end

  # GET api/options/assets
  def options
    render json: assets.render(view: :options)
  end

  # POST /api/assets
  def create
    asset.company = @active_company

    if asset.save
      render json: asset.render, status: 201
    else
      render json: { errors: asset.errors }, status: 303
    end
  end

  # PATCH/PUT /api/assets/:id
  def update
    if asset.update(asset_params)
      render json: asset.render, status: 201
    else
      render json: { errors: asset.errors }, status: 303
    end
  end

  private

  def asset_params
    params.require(:asset).permit(:name, :location_id, :manager_id, :notes)
  end
end
