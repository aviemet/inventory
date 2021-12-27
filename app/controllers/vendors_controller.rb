class VendorsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :vendors, -> { @active_company.vendors.includes_associated }
  expose :vendor, find_by: :slug

  # GET /vendors
  # GET /vendors.json
  def index
    self.vendors = search(vendors, sortable_fields)
  end

  # GET /vendors/:id
  # GET /vendors/:id.json
  def show
  end

  # GET /vendors/new
  def new
  end

  # GET /vendors/:id/edit
  def edit
  end

  # POST /vendors
  # POST /vendors.json
  def create
    respond_to do |format|
      if vendor.save
        format.html { redirect_to vendor, notice: 'Vendor was successfully created.' }
        format.json { render :show, status: :created, location: vendor }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: vendor.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /vendors/:id
  # PATCH/PUT /vendors/:id.json
  def update
    respond_to do |format|
      if vendor.update(vendor_params)
        format.html { redirect_to vendor, notice: 'Vendor was successfully updated.' }
        format.json { render :show, status: :ok, location: vendor }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: vendor.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /vendors/:id
  # DELETE /vendors/:id.json
  def destroy
    vendor.destroy
    respond_to do |format|
      format.html { redirect_to vendors_url, notice: 'Vendor was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name url).freeze
  end

  def set_view_data
    @hideable_fields = {URL: "url"}
  end

  def vendor_params
    params.require(:vendor).permit(:name, :url)
  end
end
