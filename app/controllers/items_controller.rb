class ItemsController < ApplicationController
  include OwnableConcern

  before_action :set_item, only: [:show, :edit, :update, :destroy]
  before_action :set_form_models, only: [:edit, :new, :update, :create]

  # GET /items
  # GET /items.json
  def index
    @hideable_fields = %w(asset_tag serial cost purchased_at requestable category manufacturer model.name model.model_number).freeze
    @items = current_user.active_company.items.includes([:category, :model, :assignments, :department, :vendor, :manufacturer]).order(order_by)
  end

  # GET /items/1
  # GET /items/1.json
  def show
  end

  # GET /items/new
  def new
    @item = Item.new
  end

  # GET /items/1/edit
  def edit
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
        format.html { render :new }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /items/1
  # PATCH/PUT /items/1.json
  def update
    # set_company
    respond_to do |format|
      if @item.update(item_params)
        format.html { redirect_to @item, notice: 'Item was successfully updated.' }
        format.json { render :show, status: :ok, location: @item }
      else
        format.html { render :edit }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /items/1
  # DELETE /items/1.json
  def destroy
    @item.destroy
    respond_to do |format|
      format.html { redirect_to items_url, notice: 'Item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  SORTABLE_FIELDS = %w(title asset_tag serial cost purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze

  def order_by
    return false unless SORTABLE_FIELDS.include?(params[:sort])

    "#{params[:sort]} #{%w(asc desc).freeze.include?(params[:direction]) ? params[:direction] : 'asc'}"
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
    params.require(:item).permit(:title, :asset_tag, :serial, :cost, :notes, :model_id, :vendor_id, :default_location_id, :parent_id, :purchased_at, :requestable)
  end
end
