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

  # GET /accessories/1
  def show
    render inertia: "Accessories/Show", props: {
      accessory: -> { AccessoryBlueprint.render_as_json(accessory, view: :associations) }
    }
  end

  # GET /accessories/new
  def new
    render inertia: "Accessories/New", props: {
      accessory: AccessoryBlueprint.render_as_json(Accessory.new, view: :new),
      models: @active_company.models.find_by_category(:Accessory).as_json,
      vendors: @active_company.vendors.as_json,
      locations: @active_company.locations.as_json,
    }
  end

  # GET /accessories/1/edit
  def edit
    render inertia: "Accessories/Edit"
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
