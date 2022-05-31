class AccessoriesController < ApplicationController
  include OwnableConcern
  include Searchable
  include AssignableConcern

  expose :accessories, -> { @active_company.accessories.includes_associated }
  expose :accessory

  before_action :set_view_data, only: [:index, :category]

  # GET /accessories
  # GET /accessories.json
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
  # GET /accessories/1.json
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
  # POST /accessories.json
  def create
    respond_to do |format|
      if accessory.save
        format.html { redirect_to accessory, notice: 'Accessory was successfully created.' }
        format.json { render :show, status: :created, location: accessory }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: accessory.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /accessories/1
  # PATCH/PUT /accessories/1.json
  def update
    respond_to do |format|
      if accessory.update(accessory_params)
        format.html { redirect_to accessory, notice: 'Accessory was successfully updated.' }
        format.json { render :show, status: :ok, location: accessory }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: accessory.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /accessories/1
  # DELETE /accessories/1.json
  def destroy
    accessory.destroy
    respond_to do |format|
      format.html { redirect_to accessories_url, notice: 'Accessory was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
 
  private
  
  def sortable_fields
    %w(name serial model_number cost purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def set_view_data
    @hideable_fields = {Model: "models.name", Serial: "serial", Cost: "cost", "Purchase Date": "purchased_at", Requestable: "requestable", Category: "categories.name", Manufacturer: "manufacturers.name", "Model Number": "models.model_number", Vendor: "vendors.name", Department: "departments.name"}
  end

  def accessory_params
    params.require(:accessory).permit(:name, :serial, :notes, :qty, :vendor_id, :default_location_id, :category_id, :model_number, :cost, :min_qty)
  end
end
