class ConsumablesController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :consumables, -> { @active_company.consumables.includes_associated }
  expose :consumable

  # GET /consumables
  def index
    self.consumables = search(consumables, sortable_fields)
    paginated_consumables = consumables.page(params[:page] || 1)

    render inertia: "Consumables/Index", props: {
      consumables: -> { ConsumableBlueprint.render_as_json(consumables, view: :associations) },
      pagination: -> { {
        count: consumables.count,
        **pagination_data(paginated_consumables)
      } }
    }
  end

  # GET /consumables/:id
  def show
    render inertia: "Consumables/Show", props: {
      consumable: -> { ConsumableBlueprint.render_as_json(consumable, view: :associations) }
    }
  end

  # GET /consumables/new
  def new
    render inertia: "Consumables/New", props: {
      consumable: ConsumableBlueprint.render_as_json(Consumable.new, view: :new),
      models: -> { @active_company.models.find_by_category(:Consumable).as_json },
      vendors: -> { @active_company.vendors.as_json },
      locations: -> { @active_company.locations.as_json },
    }
  end

  # GET /consumables/:id/edit
  def edit
    render inertia: "Consumables/Edit", props: {
      consumable: ConsumableBlueprint.render_as_json(consumable),
      models: -> { @active_company.models.find_by_category(:Consumable).as_json },
      vendors: -> { @active_company.vendors.as_json },
      locations: -> { @active_company.locations.as_json },
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
    %w(name model_number min_qty qty cost requestable manufacturers.name categories.name vendors.name).freeze
  end

  def consumable_params
    params.require(:consumable).permit(:name, :model_number, :min_qty, :qty, :cost, :requestable, :notes, :manufacturer_id, :category_id, :vendor_id, :default_location_id)
  end
end
