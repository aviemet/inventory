class VendorsController < ApplicationController
  include Searchable

  before_action :set_vendor, only: [:show, :edit, :update, :destroy]
  before_action :set_vendors, only: [:index]

  # GET /vendors
  # GET /vendors.json
  def index
  end

  # GET /vendors/:id
  # GET /vendors/:id.json
  def show
  end

  # GET /vendors/new
  def new
    @vendor = Vendor.new
  end

  # GET /vendors/:id/edit
  def edit
  end

  # POST /vendors
  # POST /vendors.json
  def create
    @vendor = Vendor.new(vendor_params)

    respond_to do |format|
      if @vendor.save
        format.html { redirect_to @vendor, notice: 'Vendor was successfully created.' }
        format.json { render :show, status: :created, location: @vendor }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @vendor.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /vendors/:id
  # PATCH/PUT /vendors/:id.json
  def update
    respond_to do |format|
      if @vendor.update(vendor_params)
        format.html { redirect_to @vendor, notice: 'Vendor was successfully updated.' }
        format.json { render :show, status: :ok, location: @vendor }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @vendor.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /vendors/:id
  # DELETE /vendors/:id.json
  def destroy
    @vendor.destroy
    respond_to do |format|
      format.html { redirect_to vendors_url, notice: 'Vendor was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def searchable_object
    @active_company.vendors
  end

  def sortable_fields
    %w(name url items.count).freeze
  end

  def set_view_data
    @hideable_fields = {URL: "url"}
  end

  def set_vendor
    @vendor = searchable_object.find_by_slug(params[:id])
  end

  def set_vendors
    @vendors =  if params[:search]
                  search(Vendor, params[:search], params[:page])
                else
                  searchable_object.order(sort(Vendor)).page(params[:page])
                end
  end

  def vendor_params
    params.require(:vendor).permit(:name, :url)
  end
end
