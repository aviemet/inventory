class VendorsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :vendors, -> { @active_company.vendors.includes_associated }
  expose :vendor, -> { @active_company.vendors.find_by_slug params[:slug] }

  # GET /vendors
  def index
    self.vendors = search(vendors, sortable_fields)
    paginated_vendors = vendors.page(params[:page] || 1)

    render inertia: "Vendors/Index", props: {
      vendors: VendorBlueprint.render_as_json(paginated_vendors, view: :associations),
      pagination: -> { {
        count: vendors.count,
        **pagination_data(paginated_vendors)
      } }
    }
  end

  # GET /vendors/:slug
  def show
    render inertia: "Vendors/Show", props: {
      vendor: VendorBlueprint.render_as_json(vendor, view: :show_page)
    }
  end

  # GET /vendors/new
  def new
    render inertia: "Vendors/New"
  end

  # GET /vendors/:id/edit
  def edit
    render inertia: "Vendors/Edit"
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
