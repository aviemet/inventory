class Api::VendorsController < Api::ApiController
  expose :vendors, -> { params[:category] ? @active_company.vendors.find_by_category(params[:category]) : @active_company.vendors }
  expose :vendor, id: ->{ params[:slug] }, scope: ->{ @active_company.vendors.includes_associated }, vendor: Vendor, find_by: :slug

  # GET api/vendors/options
  def index
    render json: vendors.includes_associated.render
  end

  # GET api/vendors/:slug
  def show
    render json: vendor.render
  end

  # GET api/options/vendors
  def options
    render json: vendors.render(view: :options)
  end

  # POST api/vendors
  def create
    vendor.company = @active_company

    if vendor.save
      render json: vendor.render, status: 201
    else
      render json: { errors: vendor.errors }, status: 303
    end
  end

  # PATCH/PUT api/vendors/:id
  def update
    if vendor.update(vendor_params)
      render json: vendor.render, status: 201
    else
      render json: { errors: vendor.errors }, status: 303
    end
  end

  private

  def vendor_params
    params.require(:vendor).permit(:name, :url)
  end
end
