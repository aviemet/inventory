class AccessoriesController < ApplicationController
  include OwnableConcern
  include Searchable

  before_action :set_view_data, only: [:index, :category]
  before_action :set_accessory, only: [:show, :edit, :update, :destroy]

  # GET /accessories
  # GET /accessories.json
  def index
    @accessories = if params[:search]
                     search(Accessory, params[:search], params[:page])
                   else
                     searchable_object.order(sort(Accessory)).page(params[:page])
                   end
  end

  # GET /accessories/1
  # GET /accessories/1.json
  def show
  end

  # GET /accessories/new
  def new
    @accessory = Accessory.new
  end

  # GET /accessories/1/edit
  def edit
  end

  # POST /accessories
  # POST /accessories.json
  def create
    @accessory = Accessory.new(accessory_params)

    respond_to do |format|
      if @accessory.save
        format.html { redirect_to @accessory, notice: 'Accessory was successfully created.' }
        format.json { render :show, status: :created, location: @accessory }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @accessory.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /accessories/1
  # PATCH/PUT /accessories/1.json
  def update
    respond_to do |format|
      if @accessory.update(accessory_params)
        format.html { redirect_to @accessory, notice: 'Accessory was successfully updated.' }
        format.json { render :show, status: :ok, location: @accessory }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @accessory.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /accessories/1
  # DELETE /accessories/1.json
  def destroy
    @accessory.destroy
    respond_to do |format|
      format.html { redirect_to accessories_url, notice: 'Accessory was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def searchable_object
    @active_company.accessories.includes_associated
  end
  
  def sortable_fields
    %w(name serial model_number cost purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def set_view_data
    @hideable_fields = {Model: "models.name", Serial: "serial", Cost: "cost", "Purchase Date": "purchased_at", Requestable: "requestable", Category: "categories.name", Manufacturer: "manufacturers.name", "Model Number": "models.model_number", Vendor: "vendors.name", Department: "departments.name"}
  end

  def set_accessory
    @accessory = searchable_object.find(params[:id])
  end

  def accessory_params
    params.require(:accessory).permit(:name, :serial, :notes, :qty, :vendor_id, :default_location_id, :category_id, :model_number, :cost, :min_qty)
  end
end
