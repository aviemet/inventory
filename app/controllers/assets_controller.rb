class AssetsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :assets, -> { search(@active_company.assets.includes_associated, sortable_fields) }
  expose :asset

  # GET /hardware
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

  # GET /hardware/category/:category_id
  # def category
  #   # TODO: Consider another way of filtering without using routes
  #   self.assets = assets.where('model.category': Category.find(request.params[:category_id]))
  #   render :index
  # end

  # GET /hardware/:id/checkout
  def checkout
    if asset.assigned?
      redirect_to asset, warning: 'Asset is already checked out'
    else
      assignment = Assignment.new({ assignable: asset })

      render inertia: "Assets/Checkout", props: {
        asset: asset.render,
        assignment: assignment.render(view: :new),
        people: -> { @active_company.people.select([:id, :first_name, :last_name, :location_id]).render(view: :as_options) },
        assets: -> { @active_company.assets.select([:id, :name, :default_location_id]).render(view: :as_options) },
        locations: -> { @active_company.locations.render(view: :as_options) },
      }
    end
  end

  #GET /hardware/:id/checkin
  def checkin
    unless asset.assigned?
      redirect_to asset, warning: 'Asset is not yet checked out'
    else
      assignment = asset.assignment
      assignment.returned_at = Time.current
      assignment.active = false

      render inertia: "Assets/Checkin", props: {
        asset: asset.render,
        assignment: assignment.render,
        locations: -> { @active_company.locations.render(view: :as_options) },
        statuses: -> { StatusType.all.render } # TODO: Is this scoped to a Company?
      }
    end
  end

  private

  def sortable_fields
    %w(name asset_tag serial cost cost_cents purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def asset_params
    params.require(:asset).permit(:name, :asset_tag, :serial, :cost, :cost_cents, :cost_currency, :notes, :model_id, :vendor_id, :default_location_id, :parent_id, :purchased_at, :requestable, nics: [:mac, :ip])
  end
end
