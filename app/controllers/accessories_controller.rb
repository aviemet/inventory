class AccessoriesController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :accessories, -> { search(@active_company.accessories.includes_associated, sortable_fields) }
  expose :accessory

  # GET /accessories
  def index
    paginated_accessories = accessories.page(params[:page] || 1)

    render inertia: "Accessories/Index", props: {
      accessories: -> { paginated_accessories.render(view: :associations) },
      pagination: -> { {
        count: accessories.count,
        **pagination_data(paginated_accessories)
      } }
    }
  end

  # GET /accessories/:id
  def show
    render inertia: "Accessories/Show", props: {
      accessory: -> { accessory.render(view: :associations) }
    }
  end

  # GET /accessories/new
  def new
    render inertia: "Accessories/New", props: {
      accessory: Accessory.new.render(view: :new),
      models: -> { @active_company.models.find_by_category(:Accessory).render(view: :as_options) },
      vendors: -> { @active_company.vendors.render(view: :as_options) },
      locations: -> { @active_company.locations.render(view: :as_options) },
      manufacturers: -> { @active_company.manufacturers.render(view: :as_options) },
      categories: -> { @active_company.categories.find_by_type(:accessory).render(view: :as_options) }
    }
  end

  # GET /accessories/:id/edit
  def edit
    render inertia: "Accessories/Edit", props: {
      accessory: accessory.render(view: :edit),
      models: -> { @active_company.models.find_by_category(:Accessory).render(view: :as_options) },
      vendors: -> { @active_company.vendors.render(view: :as_options) },
      locations: -> { @active_company.locations.render(view: :as_options) },
      manufacturers: -> { @active_company.manufacturers.render(view: :as_options) },
      categories: -> { @active_company.categories.find_by_type(:accessory).render(view: :as_options) }
    }
  end

  # GET /accessories/:id/checkout
  def checkout
    redirect_to accessory if accessory.qty == 0

    assignment = Assignment.new
    assignment.assignable = accessory
    assignment.assign_toable_type = :Item

    render inertia: "Accessories/Checkout", props: {
      accessory: accessory.render,
      assignment: assignment.render(view: :new),
      people: -> { @active_company.people.select([:id, :first_name, :last_name, :location_id]).render(view: :as_options) },
      items: -> { @active_company.items.select([:id, :name, :default_location_id]).render(view: :as_options) },
      locations: -> { @active_company.locations.select([:id, :slug, :name]).render(view: :as_options) },
    }
  end

  # POST /accessories
  def create
    accessory.company = @active_company
    if accessory.save
      redirect_to accessory, notice: 'Accessory was successfully created'
    else
      redirect_to new_accessory_path, inertia: { errors: accessory.errors }
    end
  end

  # PATCH/PUT /accessories/:id
  def update
    if accessory.update(accessory_params)
      redirect_to accessory, notice: 'Accessory was successfully updated'
    else
      redirect_to edit_accessory_path, inertia: { errors: accessory.errors }
    end
  end

  # DELETE /accessories/:id
  def destroy
    accessory.destroy
    redirect_to accessories_url, notice: 'Accessory was successfully destroyed.'
  end
 
  private
  
  def sortable_fields
    %w(name serial model_number cost purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def accessory_params
    params.require(:accessory).permit(:name, :serial, :asset_tag, :notes, :qty, :model_id, :vendor_id, :default_location_id, :category_id, :model_number, :cost, :cost_currency, :min_qty)
  end
end
