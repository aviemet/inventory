class VendorsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :vendors, -> { @active_company.vendors.includes_associated }
  expose :vendor, find_by: :slug, id: :slug

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
    render inertia: "Vendors/New", props: {
      vendor: VendorBlueprint.render_as_json(Vendor.new, view: :new)
    }
  end

  # GET /vendors/:id/edit
  def edit
    render inertia: "Vendors/Edit", props: {
      vendor: VendorBlueprint.render_as_json(vendor)
    }
  end

  # POST /vendors
  # POST /vendors.json
  def create
    vendor.company = @active_company

    if request.params&.[](:redirect) == false
      if vendor.save
        render json: VendorBlueprint.render_as_json(vendor), status: 200
      else
        render json: { errors: vendor.errors }, status: 302
      end
    else

      if vendor.save
        redirect_to vendor, notice: 'License was successfully created'
      else
        redirect_to new_vendor_path, inertia: { errors: vendor.errors }
      end
    end
  end

  # PATCH/PUT /vendors/:id
  def update
    if vendor.update(vendor_params)
      redirect_to vendor, notice: 'License was successfully updated'
    else
      redirect_to edit_vendor_path, inertia: { errors: vendor.errors }
    end
  end

  # DELETE /vendors/:id
  def destroy
    vendor.destroy
    redirect_to vendors_url, notice: 'Vendor was successfully destroyed.'
  end

  private

  def sortable_fields
    %w(name url).freeze
  end

  def vendor_params
    params.require(:vendor).permit(:name, :url)
  end
end
