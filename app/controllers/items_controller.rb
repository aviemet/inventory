class ItemsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :items, -> { search(@active_company.items.includes_associated, sortable_fields) }
  expose :item

  # GET /item
  def index
    authorize items
    paginated_items = items.page(params[:page] || 1)

    render inertia: "Items/Index", props: {
      items: -> { paginated_items.render(view: :index) },
      pagination: -> { {
        count: items.count,
        **pagination_data(paginated_items)
      } }
    }
  end

  # GET /item/category/:category_id
  # def category
  #   # TODO: Consider another way of filtering without using routes
  #   self.items = items.where('model.category': Category.find(request.params[:category_id]))
  #   render :index
  # end

  # GET /item/:id
  def show
    authorize item
    render inertia: "Items/Show", props: {
      item: -> { item.render(view: :show) }
    }
  end

  # GET /item/new
  def new
    authorize Item
    render inertia: "Items/New", props: {
      item: Item.new.render(view: :new),
      models: -> { @active_company.models.find_by_category(:Item).render(view: :as_options) },
      vendors: -> { @active_company.vendors.render(view: :as_options) },
      locations: -> { @active_company.locations.render(view: :as_options) },
      manufacturers: -> { @active_company.manufacturers.render(view: :as_options) },
      categories: -> { @active_company.categories.find_by_type(:item).render(view: :as_options) }
    }
  end

  # GET /item/:id/edit
  def edit
    authorize item
    render inertia: "Items/Edit", props: {
      item: item.render(view: :edit),
      models: -> { @active_company.models.find_by_category(:Item).render(view: :as_options) },
      vendors: -> { @active_company.vendors.render(view: :as_options) },
      locations: -> { @active_company.locations.render(view: :as_options) },
      manufacturers: -> { @active_company.manufacturers.render(view: :as_options) },
      categories: -> { @active_company.categories.find_by_type(:item).render(view: :as_options) }
    }
  end

  # GET /item/:id/clone
  def clone
    authorize item
    cloned_item = item.dup
    cloned_item.serial = nil
    cloned_item.item_tag = nil

    render inertia: "Items/Clone"
  end

  # GET /item/:id/checkout
  def checkout
    authorize item
    if item.assigned?
      redirect_to item, warning: 'Item is already checked out'
    else
      assignment = Assignment.new({ assignable: item })

      render inertia: "Items/Checkout", props: {
        item: item.render,
        assignment: assignment.render(view: :new),
        people: -> { @active_company.people.select([:id, :first_name, :last_name, :location_id]).render(view: :as_options) },
        items: -> { @active_company.items.select([:id, :name, :default_location_id]).render(view: :as_options) },
        locations: -> { @active_company.locations.render(view: :as_options) },
      }
    end
  end

  # GET /item/:id/checkin
  def checkin
    authorize item
    if item.assigned?
      assignment = item.assignment
      assignment.returned_at = Time.current
      assignment.active = false

      render inertia: "Items/Checkin", props: {
        item: item.render,
        assignment: assignment.render,
        locations: -> { @active_company.locations.render(view: :as_options) },
        statuses: -> { StatusLabel.all.render } # TODO: Is this scoped to a Company?
      }
    else
      redirect_to item, warning: 'Item is not yet checked out'
    end
  end

  # POST /item
  def create
    authorize Item
    item.company = @active_company

    if item.save
      redirect_to item, notice: 'Item was successfully created'
    else
      redirect_to new_item_path, inertia: { errors: item.errors }
    end
  end

  # PATCH/PUT /item/:id
  def update
    authorize item
    if item.update(item_params)
      redirect_to item, notice: 'Item was successfully updated'
    else
      redirect_to edit_item_path, inertia: { errors: item.errors }
    end
  end

  # DELETE /item/:id
  def destroy
    authorize item
    item.destroy
    redirect_to items_url, notice: 'Item was successfully destroyed.'
  end

  private

  def sortable_fields
    %w(name item_tag serial cost cost_cents purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def item_params
    params.require(:item).permit(:name, :asset_tag, :serial, :cost, :cost_cents, :cost_currency, :notes, :model_id, :vendor_id, :default_location_id, :parent_id, :status_label_id, :purchased_at, :requestable, nics: [:mac, :ip])
  end
end
