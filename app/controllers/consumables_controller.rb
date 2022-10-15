class ConsumablesController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :consumables, -> { search(@active_company.consumables.includes_associated, sortable_fields) }
  expose :consumable

  # GET /consumables
  def index
    paginated_consumables = consumables.page(params[:page] || 1)

    render inertia: "Consumables/Index", props: {
      consumables: -> { paginated_consumables.render(view: :index) },
      pagination: -> { {
        count: consumables.count,
        **pagination_data(paginated_consumables)
      } }
    }
  end

  # GET /consumables/:id
  def show
    render inertia: "Consumables/Show", props: {
      consumable: -> { consumable.render(view: :show) }
    }
  end

  # GET /consumables/new
  def new
    render inertia: "Consumables/New", props: {
      consumable: Consumable.new.render(view: :new),
      models: -> { @active_company.models.find_by_category(:Consumable).render },
      vendors: -> { @active_company.vendors.render },
      locations: -> { @active_company.locations.render },
      manufacturers: -> { @active_company.manufacturers.render(view: :as_options) },
      categories: -> { @active_company.categories.find_by_type(:item).render(view: :as_options) }
    }
  end

  # GET /consumables/:id/edit
  def edit
    render inertia: "Consumables/Edit", props: {
      consumable: consumable.render(view: :edit),
      models: -> { @active_company.models.find_by_category(:Consumable).render },
      vendors: -> { @active_company.vendors.render },
      locations: -> { @active_company.locations.render },
    }
  end
    
  # GET /consumables/:id/checkout
  def checkout
    redirect_to consumable if consumable.qty == 0

    assignment = Assignment.new
    assignment.assignable = consumable
    assignment.assign_toable_type = :Item

    render inertia: "Consumables/Checkout", props: {
      consumable: consumable.render,
      assignment: assignment.render(view: :new),
      items: -> { @active_company.items.select([:id, :name, :default_location_id]).render(view: :as_options) },
      locations: -> { @active_company.locations.select([:id, :slug, :name]).render(view: :as_options) },
    }
  end

  #GET /consumables/:id/checkin
  def checkin
    redirect_to consumable unless consumable.assignments.size > 0
    assignment = consumable.assignment
    assignment.returned_at = Time.current
    assignment.active = false

    render inertia: "Consumables/Checkin", props: {
      consumable: consumable.render,
      assignment: assignment.render,
      locations: -> { @active_company.locations.select([:id, :slug, :name]).render(view: :as_options) },
      statuses: -> { StatusType.all.render }
    }
  end

  # POST /consumables
  def create
    consumable.company = @active_company
    if consumable.save
      redirect_to consumable, notice: 'Consumable was successfully created'
    else
      redirect_to new_consumable_path, inertia: { errors: consumable.errors }
    end
  end

  # PATCH/PUT /consumables/:id
  def update
    if consumable.update(consumable_params)
      redirect_to consumable, notice: 'Consumable was successfully updated'
    else
      redirect_to edit_consumable_path, inertia: { errors: consumable.errors }
    end
  end

  # DELETE /consumables/:id
  def destroy
    consumable.destroy
    respond_to do |format|
      format.html { redirect_to consumables_url, notice: 'Consumable was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name min_qty qty cost requestable model.name model.model_number manufacturers.name categories.name vendors.name).freeze
  end

  def consumable_params
    params.require(:consumable).permit(:name, :min_qty, :qty, :cost, :requestable, :notes, :manufacturer_id, :category_id, :vendor_id, :default_location_id)
  end
end
