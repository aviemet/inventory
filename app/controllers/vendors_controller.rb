class VendorsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :vendors, -> { search(@active_company.vendors.includes_associated, sortable_fields) }
  expose :vendor, id: ->{ params[:slug] }, scope: ->{ @active_company.vendors.includes_associated }, find_by: :slug

  # GET /vendors
  def index
    authorize vendors
    paginated_vendors = vendors.page(params[:page] || 1).per(current_user.limit(:vendors))

    render inertia: "Vendors/Index", props: {
      vendors: paginated_vendors.render(view: :index),
      pagination: -> { {
        count: vendors.size,
        **pagination_data(paginated_vendors)
      } }
    }
  end

  # GET /vendors/:slug
  def show
    authorize vendor
    render inertia: "Vendors/Show", props: {
      vendor: vendor.render(view: :show),
      items: InertiaRails.lazy(-> {
        paginated_items = vendor.items.includes_associated.page(params[:page] || 1)
        {
          data: paginated_items.render,
          pagination: {
            count: vendor.items.size,
            **pagination_data(paginated_items)
          }
        }
      }),
      accessories: InertiaRails.lazy(-> {
        paginated_accessories = vendor.accessories.includes_associated.page(params[:page] || 1)
        {
          data: paginated_accessories.render,
          pagination: {
            count: vendor.accessories.size,
            **pagination_data(paginated_accessories)
          }
        }
      }),
      consumables: InertiaRails.lazy(-> {
        paginated_consumables = vendor.consumables.includes_associated.page(params[:page] || 1)
        {
          data: paginated_consumables.render,
          pagination: {
            count: vendor.consumables.size,
            **pagination_data(paginated_consumables)
          }
        }
      }),
      components: InertiaRails.lazy(-> {
        paginated_components = vendor.components.includes_associated.page(params[:page] || 1)
        {
          data: paginated_components.render,
          pagination: {
            count: vendor.components.size,
            **pagination_data(paginated_components)
          }
        }
      }),
      licenses: InertiaRails.lazy(-> {
        paginated_licenses = vendor.licenses.includes_associated.page(params[:page] || 1)
        {
          data: paginated_licenses.render,
          pagination: {
            count: vendor.licenses.size,
            **pagination_data(paginated_licenses)
          }
        }
      }),
      contracts: InertiaRails.lazy(-> {
        paginated_contracts = vendor.contracts.includes_associated.page(params[:page] || 1)
        {
          data: paginated_contracts.render,
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
    authorize Vendor
    render inertia: "Vendors/New", props: {
      vendor: Vendor.new.render(view: :form_data)
    }
  end

  # GET /vendors/:slug/edit
  def edit
    authorize vendor
    render inertia: "Vendors/Edit", props: {
      vendor: vendor.render(view: :edit)
    }
  end

  # POST /vendors
  def create
    authorize Vendor
    vendor = Vendor.new(vendor_params)
    vendor.company = @active_company

    if request.params&.[](:redirect) == false
      if vendor.save
        render json: vendor.render, status: :created
      else
        render json: { errors: vendor.errors }, status: :see_other
      end
    elsif vendor.save
      redirect_to vendor, notice: 'Vendor was successfully created'
    else
      redirect_to new_vendor_path, inertia: { errors: vendor.errors }
    end
  end

  # PATCH/PUT /vendors/:slug
  def update
    authorize vendor
    if vendor.update(vendor_params)
      redirect_to vendor, notice: 'Vendor was successfully updated'
    else
      redirect_to edit_vendor_path, inertia: { errors: vendor.errors }
    end
  end

  # DELETE /vendors
  # DELETE /vendors/:slug
  def destroy
    authorize vendor
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
