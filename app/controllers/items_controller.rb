class ItemsController < ApplicationController
  include OwnableConcern

  expose :items, -> { search(@active_company.items.includes_associated, sortable_fields) }
  expose :item, scope: ->{ @active_company.items }, find: ->(id, scope){ scope.includes_associated.find(id) }

  before_action :handle_department_change, only: [:create, :update]

  # @route GET /hardware (items)
  def index
    authorize items

    paginated_items = items.page(params[:page] || 1).per(current_user.limit(:items))

    render inertia: "Items/Index", props: {
      items: -> { paginated_items.render(view: :index) },
      pagination: -> { {
        count: items.count,
        **pagination_data(paginated_items)
      } }
    }
  end

  # @route GET /hardware/:id (item)
  def show
    authorize item
    render inertia: "Items/Show", props: {
      item: -> { item.render(view: :show) },
    }
  end

  # @route GET /hardware/new (new_item)
  def new
    authorize Item
    render inertia: "Items/New", props: {
      item: Item.new.render(view: :form_data),
    }
  end

  # @route GET /hardware/:id/edit (edit_item)
  def edit
    authorize item
    render inertia: "Items/Edit", props: {
      item: item.render(view: :edit),
    }
  end

  # @route GET /hardware/:id/clone (clone_items)
  def clone
    authorize item
    cloned_item = item.dup
    cloned_item.serial = nil
    cloned_item.item_tag = nil

    render inertia: "Items/Clone"
  end

  # @route GET /hardware/:id/checkout (checkout_item)
  def checkout
    authorize item
    if item.assigned?
      redirect_to item, warning: 'Item is already checked out'
    else
      assignment = Assignment.new({ assignable: item, assign_toable_type: "Person" })

      render inertia: "Items/Checkout", props: {
        item: item.render,
        assignment: assignment.render(view: :form_data),
        people: -> { @active_company.people.select([:id, :first_name, :last_name, :location_id]).render(view: :options) },
        items: -> { @active_company.items.select([:id, :name, :default_location_id]).render(view: :options) },
        locations: -> { @active_company.locations.render(view: :options) },
      }
    end
  end

  # @route GET /hardware/:id/checkin (checkin_item)
  def checkin
    authorize item
    if item.assigned?
      assignment = item.assignment
      assignment.returned_at = Time.current
      assignment.active = false

      render inertia: "Items/Checkin", props: {
        item: item.render,
        assignment: assignment.render,
        locations: -> { @active_company.locations.render(view: :options) },
        status_labels: -> { StatusLabel.all.render } # TODO: Is this scoped to a Company?
      }
    else
      redirect_to item, warning: 'Item is not yet checked out'
    end
  end

  # @route POST /hardware (items)
  def create
    authorize Item
    item = Item.new(item_params)
    item.company = @active_company

    if item.save
      redirect_to item, notice: 'Item was successfully created'
    else
      redirect_to new_item_path, inertia: { errors: item.errors }
    end
  end

  # @route PATCH /hardware/:id (item)
  # @route PUT /hardware/:id (item)
  def update
    authorize item

    if item.update(item_params)
      redirect_to item, notice: 'Item was successfully updated'
    else
      redirect_to edit_item_path, inertia: { errors: item.errors }
    end
  end

  # @route DELETE /hardware (items)
  # @route DELETE /hardware/:id (item)
  def destroy
    authorize item
    item.destroy
    redirect_to items_url, notice: 'Item was successfully destroyed.'
  end

  private

  def handle_department_change
    if item_params[:department_id]
      item_params[:department] = Department.find(item_params[:department_id])
      item_params.delete(:department_id)
    end
  end

  def sortable_fields
    %w(name asset_tag serial cost cost_cents purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def advanced_search_params
    params.permit(:name, :asset_tag, :serial, :cost, :purchased_at, :requestable, model: [:id], vendor: [:id], manufacturer: [:id], department: [:id], category: [:id], created_at: [:start, :end, :type])
  end

  def item_params
    @item_params ||= params.require(:item).permit(:name, :asset_tag, :serial, :cost, :cost_cents, :cost_currency, :notes, :department_id, :model_id, :vendor_id, :default_location_id, :parent_id, :status_label_id, :purchased_at, :requestable, nics: [:mac, :ip])
  end
end
