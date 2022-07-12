class AccessoriesController < ApplicationController
  include OwnableConcern
  include Searchable
  include AssignableConcern

  expose :accessories, -> { @active_company.accessories.includes_associated }
  expose :accessory

  # GET /accessories
  def index
    self.accessories = search(accessories, sortable_fields)
    paginated_accessories = accessories.page(params[:page] || 1)

    render inertia: "Accessories/Index", props: {
      accessories: -> { AccessoryBlueprint.render_as_json(accessories, view: :associations) },
      pagination: -> { {
        count: accessories.count,
        **pagination_data(paginated_accessories)
      } }
    }
  end

  # GET /accessories/:id
  def show
    render inertia: "Accessories/Show", props: {
      accessory: -> { AccessoryBlueprint.render_as_json(accessory, view: :associations) }
    }
  end

  # GET /accessories/new
  def new
    render inertia: "Accessories/New", props: {
      accessory: AccessoryBlueprint.render_as_json(Accessory.new, view: :new),
      models: -> { ModelBlueprint.render_as_json(@active_company.models.find_by_category(:Item), view: :as_options) },
      vendors: -> { VendorBlueprint.render_as_json(@active_company.vendors, view: :as_options) },
      locations: -> { LocationBlueprint.render_as_json(@active_company.locations, view: :as_options) },
    }
  end

  # GET /accessories/:id/edit
  def edit
    render inertia: "Accessories/Edit", props: {
      accessory: AccessoryBlueprint.render_as_json(Aaccessory),
      models: -> { ModelBlueprint.render_as_json(@active_company.models.find_by_category(:Item), view: :as_options) },
      vendors: -> { VendorBlueprint.render_as_json(@active_company.vendors, view: :as_options) },
      locations: -> { LocationBlueprint.render_as_json(@active_company.locations, view: :as_options) },
    }
  end

  # GET /accessories/:id/checkout
  def checkout
    redirect_to accessory if accessory.qty == 0

    assignment = Assignment.new
    assignment.assignable = accessory
    assignment.assign_toable_type = :Item

    render inertia: "Accessories/Checkout", props: {
      accessory: AccessoryBlueprint.render_as_json(accessory),
      assignment: AssignmentBlueprint.render_as_json(assignment, view: :new),
      people: -> { PersonBlueprint.render_as_json(@active_company.people.select([:id, :first_name, :last_name, :location_id]), view: :as_options) },
      items: -> { ItemBlueprint.render_as_json(@active_company.items.select([:id, :name, :default_location_id]), view: :as_options) },
      locations: -> { LocationBlueprint.render_as_json(@active_company.locations.select([:id, :slug, :name]), view: :as_options) },
    }
  end

  #GET /accessories/:id/checkin
  def checkin
    redirect_to accessory unless accessory.assigned?
    assignment = item.assignment
    assignment.returned_at = Time.current
    assignment.active = false

    render inertia: "Accessories/Checkin", props: {
      item: ItemBlueprint.render_as_json(item),
      assignment: AssignmentBlueprint.render_as_json(assignment),
      locations: -> { LocationBlueprint.render_as_json(@active_company.locations.select([:id, :slug, :name]), view: :as_options) },
      statuses: -> { StatusTypeBlueprint.render_as_json(StatusType.all) }
    }
  end

  # POST /accessories
  def create
    accessory.company = @active_company
    if accessory.save
      redirect_to accessory, notice: 'License was successfully created'
    else
      redirect_to new_accessory_path, inertia: { errors: accessory.errors }
    end
  end

  # PATCH/PUT /accessories/1
  def update
    if accessory.update(accessory_params)
      redirect_to accessory, notice: 'License was successfully updated'
    else
      redirect_to edit_accessory_path, inertia: { errors: accessory.errors }
    end
  end

  # DELETE /accessories/1
  def destroy
    accessory.destroy
    redirect_to accessories_url, notice: 'Accessory was successfully destroyed.'
  end
 
  private
  
  def sortable_fields
    %w(name serial model_number cost purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def accessory_params
    params.require(:accessory).permit(:name, :serial, :notes, :qty, :vendor_id, :default_location_id, :category_id, :model_number, :cost, :min_qty)
  end
end
