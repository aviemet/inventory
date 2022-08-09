class VendorsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :vendors, -> { @active_company.vendors.includes_associated }
  expose :vendor, -> { 
    @active_company.vendors.includes_associated.find_by_slug(request.params[:slug]) || Vendor.new(vendor_params)
  }

  # GET /vendors
  def index
    self.vendors = search(vendors, sortable_fields)
    paginated_vendors = vendors.page(params[:page] || 1)

    render inertia: "Vendors/Index", props: {
      vendors: VendorBlueprint.render_as_json(paginated_vendors, view: :associations),
      pagination: -> { {
        count: vendors.size,
        **pagination_data(paginated_vendors)
      } }
    }
  end

  # GET /vendors/:slug
  def show
    render inertia: "Vendors/Show", props: {
      vendor: VendorBlueprint.render_as_json(vendor, view: :show_page),
      items: -> {
        paginated_items = vendor.items.includes_associated.page(params[:page] || 1)
        {
          data: ItemBlueprint.render_as_json(paginated_items, view: :associations),
          pagination: {
            count: vendor.items.size,
            **pagination_data(paginated_items)
          }
        }
      },
      accessories: InertiaRails.lazy(-> { 
        paginated_accessories = vendor.accessories.includes_associated.page(params[:page] || 1)
        {
          data: AccessoryBlueprint.render_as_json(paginated_accessories, view: :associations),
          pagination: {
            count: vendor.accessories.size,
            **pagination_data(paginated_accessories)
        }
        }
      }),
      consumables: InertiaRails.lazy(-> { 
        paginated_consumables = vendor.consumables.includes_associated.page(params[:page] || 1)
        {
          data: ConsumableBlueprint.render_as_json(paginated_consumables, view: :associations),
          pagination: {
            count: vendor.consumables.size,
            **pagination_data(paginated_consumables)
        }
        }
      }),
      components: InertiaRails.lazy(-> { 
        paginated_components = vendor.components.includes_associated.page(params[:page] || 1)
        {
          data: ComponentBlueprint.render_as_json(paginated_components, view: :associations),
          pagination: {
            count: vendor.components.size,
            **pagination_data(paginated_components)
        }
        }
      }),
      licenses: InertiaRails.lazy(-> { 
        paginated_licenses = vendor.licenses.includes_associated.page(params[:page] || 1)
        {
          data: LicenseBlueprint.render_as_json(paginated_licenses, view: :associations),
          pagination: {
            count: vendor.licenses.size,
            **pagination_data(paginated_licenses)
        }
        }
      }),
      contracts: InertiaRails.lazy(-> { 
        paginated_contracts = vendor.contracts.includes_associated.page(params[:page] || 1)
        {
          data: ContractBlueprint.render_as_json(paginated_contracts, view: :associations),
          pagination: {
            count: vendor.contracts.size,
            **pagination_data(paginated_contracts)
        }
        }
      }),
    }
  end

  # GET /vendors/new
  def new
    render inertia: "Vendors/New", props: {
      vendor: VendorBlueprint.render_as_json(Vendor.new, view: :new)
    }
  end

  # GET /vendors/:slug/edit
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
        render json: VendorBlueprint.render_as_json(vendor), status: 201
      else
        render json: { errors: vendor.errors }, status: 303
      end

    else

      if vendor.save
        redirect_to vendor, notice: 'License was successfully created'
      else
        redirect_to new_vendor_path, inertia: { errors: vendor.errors }
      end

    end
  end

  # PATCH/PUT /vendors/:slug
  def update
    if vendor.update(vendor_params)
      redirect_to vendor, notice: 'License was successfully updated'
    else
      redirect_to edit_vendor_path, inertia: { errors: vendor.errors }
    end
  end

  # DELETE /vendors
  # DELETE /vendors/:slug
  def destroy
    if request.params[:slug]
      vendor.destroy
    else
      @active_company.vendors.where(id: request.params&.[](:ids)).destroy_all
    end
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
