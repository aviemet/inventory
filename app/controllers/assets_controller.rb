class AssetsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :assets, -> { search(@active_company.assets.includes_associated, sortable_fields) }
  expose :asset

  # GET /assets
  def index
    paginated_assets = assets.page(params[:page] || 1)

    render inertia: "Assets/Index", props: {
      assets: -> { paginated_assets.render(view: :index) },
      pagination: -> { {
        count: assets.count,
        **pagination_data(paginated_assets)
      } }
    }
  end

  # GET /assets/:id
  def show
    redirect_to_asset_type_controller(:show)
  end

  # GET /assets/:id/edit
  def edit
    redirect_to_asset_type_controller(:edit)
  end

  # GET /assets/:id/checkout
  def checkout
    redirect_to_asset_type_controller(:checkout)
  end

  # GET /assets/:id/checkin
  def checkin
    redirect_to_asset_type_controller(:checkin)
  end

  private

  def redirect_to_asset_type_controller(action)
    redirect_to controller: asset.type.downcase.pluralize, action:, id: asset
  end

  def sortable_fields
    %w(name asset_tag serial cost cost_cents purchased_at requestable type models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def asset_params
    params.require(:asset).permit(:name, :asset_tag, :serial, :cost, :cost_cents, :cost_currency, :notes, :model_id, :vendor_id, :default_location_id, :parent_id, :purchased_at, :requestable, nics: [:mac, :ip])
  end
end
