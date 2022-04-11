class ItemsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :items, -> { @active_company.items.includes_associated }
  expose :item
  expose :category, id: -> { request.params[:category_id] }

  before_action :set_view_data, only: [:index, :category]

  # GET /items
  # GET /items.json
  def index
    self.items = search(items, sortable_fields)
    render inertia: "Items/Index"
  end

  # GET /items/category/:category_id
  # GET /items/category/:category_id.json
  # def category
  #   # TODO: Consider another way of filtering without using routes
  #   self.items = items.where('model.category': Category.find(request.params[:category_id]))
  #   render :index
  # end

  # GET /items/:id
  # GET /items/:id.json
  def show
    render inertia: "Items/Show"
  end

  # GET /items/new
  def new
    render inertia: "Items/New"
  end

  # GET /items/:id/edit
  def edit
    render inertia: "Items/Edit"
  end

  # GET /items/:id/clone
  def clone
    self.item = Item.find(params[:id]).dup
    self.item.serial = nil
    self.item.asset_tag = nil
    self.item
    render inertia: "Items/Clone"
  end

  # POST /items
  # POST /items.json
  def create
    item.company = Company.find(company_params[:id])
    respond_to do |format|
      if item.save
        format.html { redirect_to item, notice: 'Item was successfully created.' }
        format.json { render :show, status: :created, location: item }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /items/:id
  # PATCH/PUT /items/:id.json
  def update
    respond_to do |format|
      if item.update(item_params)
        format.html { redirect_to item, notice: 'Item was successfully updated.' }
        format.json { render :show, status: :ok, location: item }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /items/:id
  # DELETE /items/:id.json
  def destroy
    item.destroy
    respond_to do |format|
      format.html { redirect_to items_url, notice: 'Item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name asset_tag serial cost cost_cents purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def set_view_data
    @hideable_fields = { Model: "models.name", "Asset Tag": "asset_tag", Serial: "serial", Cost: "cost", "Purchase Date": "purchased_at", Requestable: "requestable", Category: "categories.name", Manufacturer: "manufacturers.name", "Model Number": "models.model_number", Vendor: "vendors.name", Department: "departments.name" }
  end

  def item_params
    params.require(:item).permit(:name, :asset_tag, :serial, :cost, :cost_cents, :cost_currency, :notes, :model_id, :vendor_id, :default_location_id, :parent_id, :purchased_at, :requestable, nics: [:mac, :ip])
  end
end
