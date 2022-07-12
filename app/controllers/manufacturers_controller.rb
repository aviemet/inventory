class ManufacturersController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :manufacturers, -> { @active_company.manufacturers }
  expose :manufacturer, -> { @active_company.manufacturers.find_by_slug params[:slug] }

  # GET /manufacturers
  def index
    self.manufacturers = search(manufacturers, sortable_fields)
    paginated_manufacturers = manufacturers.page(params[:page] || 1)

    render inertia: "Manufacturers/Index", props: {
      manufacturers: ManufacturerBlueprint.render_as_json(paginated_manufacturers, view: :associations),
      pagination: -> { {
        count: manufacturers.count,
        **pagination_data(paginated_manufacturers)
      } }
    }
  end

  # GET /manufacturers/1
  def show
    render inertia: "Manufacturers/Show", props: {
      manufacturer: ManufacturerBlueprint.render_as_json(manufacturers, view: :associations)
    }
  end

  # GET /manufacturers/new
  def new
    render inertia: "Manufacturers/New", props: {
      manufacturer: ManufacturerBlueprint.render_as_json(Manufacturer.new, view: :new)
    }
  end

  # GET /manufacturers/1/edit
  def edit
    render inertia: "Manufacturers/Edit", props: {
      manufacturer: ManufacturerBlueprint.render_as_json(manufacturer, view: :new)
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

  # PATCH/PUT /manufacturers/1
  def update
    if manufacturer.update(manufacturer_params)
      redirect_to manufacturer, notice: 'Manufacturer was successfully updated'
    else
      redirect_to edit_manufacturer_path, inertia: { errors: manufacturer.errors }
    end
  end

  # DELETE /manufacturers/1
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
