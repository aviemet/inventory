class ItemsController < ApplicationController
  include OwnableConcern
  include Sortable
  include Searchable

  before_action :set_view_data, only: [:index, :category]
  before_action :set_item, only: [:show, :edit, :update, :destroy]
  before_action :set_items, only: [:index, :category]
  before_action :set_form_models, only: [:edit, :new, :update, :create, :clone]

  # GET /items
  # GET /items.json
  def index
  end

  # GET /items/category/:category_id
  # GET /items/category/:category_id.json
  def category
    @category = Category.find(request.params[:category_id])
    @items = @items.where('model.category': @category)
    render :index
  end

  # GET /items/:id
  # GET /items/:id.json
  def show
  end

  # GET /items/new
  def new
    @item = Item.new
  end

  # GET /items/:id/edit
  def edit
  end

  # GET /items/:id/clone
  def clone
    @item = Item.find(params[:id]).dup
    @item.serial = nil
    @item
  end

  # POST /items
  # POST /items.json
  def create
    @item = Item.new(item_params)
    @item.company = Company.find(company_params[:id])
    respond_to do |format|
      if @item.save
        format.html { redirect_to @item, notice: 'Item was successfully created.' }
        format.json { render :show, status: :created, location: @item }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /items/:id
  # PATCH/PUT /items/:id.json
  def update
    # set_company
    respond_to do |format|
      if @item.update(item_params)
        format.html { redirect_to @item, notice: 'Item was successfully updated.' }
        format.json { render :show, status: :ok, location: @item }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /items/:id
  # DELETE /items/:id.json
  def destroy
    @item.destroy
    respond_to do |format|
      format.html { redirect_to items_url, notice: 'Item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def searchable_object
    @active_company.items.includes_associated
  end

  def sortable_fields
    %w(name asset_tag serial cost cost_cents purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def set_view_data
    @hideable_fields = {"Model": "models.name", "Asset Tag": "asset_tag", "Serial": "serial", "Cost": "cost", "Purchase Date": "purchased_at", "Requestable": "requestable", "Category": "categories.name", "Manufacturer": "manufacturers.name", "Model Number": "models.model_number", "Vendor": "vendors.name", "Department": "departments.name"}
  end

  def set_item
    @item = Item.find(params[:id])
  end

  def set_items
    # if current_user[:table_preferences]["items"]
    #   Item.ignored_columns = current_user[:table_preferences]["items"].map{ |k, v| k unless v }
    # end
    @items = if params[:search]
               search(Item, params[:search], params[:page])
             else
               searchable_object.order(sort(Item)).page(params[:page])
             end
  end

  def set_form_models
    @models = Model.all
    @vendors = Vendor.all
    @locations = Location.all
    @companies = current_user.companies
  end

  def item_params
    params.require(:item).permit(:name, :asset_tag, :serial, :cost, :cost_cents, :cost_currency, :notes, :model_id, :vendor_id, :default_location_id, :parent_id, :purchased_at, :requestable)
  end
end
