class ItemsController < ApplicationController
  include OwnableConcern

  before_action :set_view_data, only: [:index, :category]
  before_action :set_item, only: [:show, :edit, :update, :destroy]
  before_action :set_form_models, only: [:edit, :new, :update, :create, :clone]

  # GET /items
  # GET /items.json
  def index
    @items = @active_company.items.includes_associated.order(order_by).page(params[:page])
  end

  # GET /items/category/:category_id
  # GET /items/category/:category_id.json
  def category
    @category = Category.find(request.params[:category_id])
    @items = @active_company.items.includes_associated.where('model.category': @category).order(order_by)
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

  SORTABLE_FIELDS = %w(name asset_tag serial cost_cents purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze

  def set_view_data
    @hideable_fields = {"Model": "models.name", "Asset Tag": "asset_tag", "Serial": "serial", "Cost": "cost", "Purchase Date": "purchased_at", "Requestable": "requestable", "Category": "categories.name", "Manufacturer": "manufacturers.name", "Model Number": "models.model_number", "Vendor": "vendors.name", "Department": "departments.name"}
  end

  def order_by
    return false unless SORTABLE_FIELDS.include?(params[:sort])

    direction = %w(asc desc).freeze.include?(params[:direction]) ? params[:direction] : 'asc'
    sort = %w(string text).freeze.include?(field_type(Item, params[:sort])) ? "lower(#{params[:sort]})" : params[:sort]
    # sort = params[:sort]
    "#{sort} #{direction}"
  end

  def set_item
    @item = Item.find(params[:id])
  end

  def set_form_models
    @models = Model.all
    @vendors = Vendor.all
    @locations = Location.all
    @companies = current_user.companies
  end

  def item_params
    params.require(:item).permit(:name, :asset_tag, :serial, :cost_cents, :cost_currency, :notes, :model_id, :vendor_id, :default_location_id, :parent_id, :purchased_at, :requestable)
  end
end
