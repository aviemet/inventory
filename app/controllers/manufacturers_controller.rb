class ManufacturersController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :manufacturers, -> { search(@active_company.manufacturers.includes_associated, sortable_fields) }
  expose :manufacturer, -> { @active_company.manufacturers.includes_associated.find_by_slug params[:slug] }

  # GET /manufacturers
  def index
    paginated_manufacturers = manufacturers.page(params[:page] || 1)

    render inertia: "Manufacturers/Index", props: {
      manufacturers: paginated_manufacturers.render(view: :index),
      pagination: -> { {
        count: manufacturers.count,
        **pagination_data(paginated_manufacturers)
      } }
    }
  end

  # GET /manufacturers/:id
  def show
    render inertia: "Manufacturers/Show", props: {
      manufacturer: manufacturer.render(view: :show)
    }
  end

  # GET /manufacturers/new
  def new
    render inertia: "Manufacturers/New", props: {
      manufacturer: Manufacturer.new.render(view: :new)
    }
  end

  # GET /manufacturers/:id/edit
  def edit
    render inertia: "Manufacturers/Edit", props: {
      manufacturer: manufacturer.render(view: :edit)
    }
  end

  # POST /manufacturers
  def create
    manufacturer.company = @active_company
    if manufacturer.save
      redirect_to manufacturer, notice: 'Manufacturer was successfully created'
    else
      redirect_to new_manufacturer_path, inertia: { errors: manufacturer.errors }
    end
  end

  # PATCH/PUT /manufacturers/:id
  def update
    if manufacturer.update(manufacturer_params)
      redirect_to manufacturer, notice: 'Manufacturer was successfully updated'
    else
      redirect_to edit_manufacturer_path, inertia: { errors: manufacturer.errors }
    end
  end

  # DELETE /manufacturers/:id
  def destroy
    manufacturer.destroy
    redirect_to manufacturers_url, notice: 'Manufacturer was successfully destroyed.'
  end

  private

  def sortable_fields
    %w(name).freeze
  end

  def manufacturer_params
    params.require(:manufacturer).permit(:name)
  end
end
