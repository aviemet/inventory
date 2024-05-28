class Api::AssetsController < Api::ApiController
  expose :assets, -> {  @active_company.assets }
  expose :asset, scope: ->{ @active_company.assets }

  # @route GET /api/assets (api_assets)
  def index
    render json: assets.includes_associated.render
  end

  # @route GET /api/assets/:id (api_asset)
  def show
    render json: asset.render
  end

  # @route GET /api/options/assets (api_assets_options)
  def options
    render json: assets.render(view: :options)
  end

  def create
    asset.company = @active_company

    if asset.save
      render json: asset.render, status: :created
    else
      render json: { errors: asset.errors }, status: :see_other
    end
  end

  # @route PATCH /api/assets/:id (api_asset)
  # @route PUT /api/assets/:id (api_asset)
  def update
    if asset.update(asset_params)
      render json: asset.render, status: :created
    else
      render json: { errors: asset.errors }, status: :see_other
    end
  end

  private

  def asset_params
    params.require(:asset).permit(:name, :location_id, :manager_id, :notes)
  end
end
