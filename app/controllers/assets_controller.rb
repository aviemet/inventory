class AssetsController < ApplicationController
  include OwnableConcern

  expose :assets, -> { search(@active_company.assets.includes_associated) }
  expose :asset, scope: ->{ @active_company.assets }, find: ->(id, scope){ scope.includes_associated.find(id) }

  strong_params :asset, [:name, :asset_tag, :serial, :cost, :cost_cents, :cost_currency, :notes, :model_id, :vendor_id, :default_location_id, :parent_id, :purchased_at, :requestable, nics: [:mac, :ip]]

  sortable_fields %w(name asset_tag serial cost cost_cents purchased_at requestable type models.name vendors.name categories.name manufacturers.name departments.name)

  # @route GET /inventory (assets)
  def index
    paginated_assets = paginate(assets, :assets)

    render inertia: "Assets/Index", props: {
      assets: -> { paginated_assets.render(view: :index) },
      pagination: -> { {
        count: assets.count,
        **pagination_data(paginated_assets)
      } }
    }
  end

  # @route GET /inventory/:id (asset)
  def show
    redirect_to_asset_type_controller(:show)
  end

  # @route GET /inventory/:id/edit (edit_asset)
  def edit
    redirect_to_asset_type_controller(:edit)
  end

  # @route GET /inventory/:id/checkout (checkout_asset)
  def checkout
    redirect_to_asset_type_controller(:checkout)
  end

  # @route GET /inventory/:id/checkin (checkin_asset)
  def checkin
    redirect_to_asset_type_controller(:checkin)
  end

  private

  def redirect_to_asset_type_controller(action)
    redirect_to controller: asset.type.downcase.pluralize, action:, id: asset
  end

end
