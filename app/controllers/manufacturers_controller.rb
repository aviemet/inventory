class ManufacturersController < ApplicationController
  include OwnableConcern

  expose :manufacturers, -> { search(@active_company.manufacturers.includes_associated, sortable_fields) }
  expose :manufacturer, id: ->{ params[:slug] }, scope: ->{ @active_company.manufacturers.includes_associated }, find_by: :slug

  # @route GET /manufacturers (manufacturers)
  def index
    authorize manufacturers
    paginated_manufacturers = manufacturers.page(params[:page] || 1).per(current_user.limit(:manufacturers))

    render inertia: "Manufacturers/Index", props: {
      manufacturers: paginated_manufacturers.render(view: :index),
      pagination: -> { {
        count: manufacturers.count,
        **pagination_data(paginated_manufacturers)
      } }
    }
  end

  # @route GET /manufacturers/:slug (manufacturer)
  def show
    authorize manufacturer
    render inertia: "Manufacturers/Show", props: {
      manufacturer: manufacturer.render(view: :show),
      items: InertiaRails.optional {
        paginated_items = manufacturer.items.includes_associated.page(params[:page] || 1)
        {
          data: paginated_items.render,
          pagination: {
            count: manufacturer.items.size,
            **pagination_data(paginated_items)
          }
        }
      },
      accessories: InertiaRails.optional {
        paginated_accessories = manufacturer.accessories.includes_associated.page(params[:page] || 1)
        {
          data: paginated_accessories.render,
          pagination: {
            count: manufacturer.accessories.size,
            **pagination_data(paginated_accessories)
          }
        }
      },
      consumables: InertiaRails.optional {
        paginated_consumables = manufacturer.consumables.includes_associated.page(params[:page] || 1)
        {
          data: paginated_consumables.render,
          pagination: {
            count: manufacturer.consumables.size,
            **pagination_data(paginated_consumables)
          }
        }
      },
      components: InertiaRails.optional {
        paginated_components = manufacturer.components.includes_associated.page(params[:page] || 1)
        {
          data: paginated_components.render,
          pagination: {
            count: manufacturer.components.size,
            **pagination_data(paginated_components)
          }
        }
      },
    }
  end

  # @route GET /manufacturers/new (new_manufacturer)
  def new
    authorize Manufacturer
    render inertia: "Manufacturers/New", props: {
      manufacturer: Manufacturer.new.render(view: :form_data)
    }
  end

  # @route GET /manufacturers/:slug/edit (edit_manufacturer)
  def edit
    authorize manufacturer
    render inertia: "Manufacturers/Edit", props: {
      manufacturer: manufacturer.render(view: :edit)
    }
  end

  # @route POST /manufacturers (manufacturers)
  def create
    authorize Manufacturer
    manufacturer = Manufacturer.new(manufacturer_params)
    manufacturer.company = @active_company
    if manufacturer.save
      redirect_to manufacturer, notice: "Manufacturer was successfully created"
    else
      redirect_to new_manufacturer_path, inertia: { errors: manufacturer.errors }
    end
  end

  # @route PATCH /manufacturers/:slug (manufacturer)
  # @route PUT /manufacturers/:slug (manufacturer)
  def update
    authorize manufacturer
    if manufacturer.update(manufacturer_params)
      redirect_to manufacturer, notice: "Manufacturer was successfully updated"
    else
      redirect_to edit_manufacturer_path, inertia: { errors: manufacturer.errors }
    end
  end

  # @route DELETE /manufacturers (manufacturers)
  # @route DELETE /manufacturers/:slug (manufacturer)
  def destroy
    authorize manufacturer
    manufacturer.destroy
    redirect_to manufacturers_url, notice: "Manufacturer was successfully destroyed."
  end

  private

  def sortable_fields
    %w(name).freeze
  end

  def manufacturer_params
    params.expect(manufacturer: [:name])
  end
end
