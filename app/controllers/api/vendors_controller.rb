class Api::VendorsController < Api::ApiController
  expose :vendors, -> { params[:category] ? @active_company.vendors.find_by(category: params[:category]) : @active_company.vendors }
  expose :vendor, id: ->{ params[:slug] }, scope: ->{ @active_company.vendors.includes_associated }, vendor: Vendor, find_by: :slug

  strong_params :vendor, [:name, :url]

  # @route GET /api/vendors (api_vendors)
  def index
    render json: vendors.includes_associated.render
  end

  # @route GET /api/vendors/:slug (api_vendor)
  def show
    render json: vendor.render
  end

  # @route GET /api/options/vendors (api_vendors_options)
  def options
    render json: vendors.render(view: :options)
  end

  # POST api/vendors
  # @route POST /api/vendors (api_vendors)
  def create
    vendor.company = @active_company

    if vendor.save
      render json: vendor.render, status: :created
    else
      render json: { errors: vendor.errors }, status: :see_other
    end
  end

  # PATCH/PUT api/vendors/:id
  # @route PATCH /api/vendors/:slug (api_vendor)
  # @route PUT /api/vendors/:slug (api_vendor)
  def update
    if vendor.update(vendor_params)
      render json: vendor.render, status: :created
    else
      render json: { errors: vendor.errors }, status: :see_other
    end
  end

  private
end
