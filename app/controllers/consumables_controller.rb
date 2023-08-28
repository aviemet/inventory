class ConsumablesController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :consumables, -> { search(@active_company.consumables.includes_associated, sortable_fields) }
  expose :consumable, scope: ->{ @active_company.consumables }, find: ->(id, scope){ scope.includes_associated.find(id) }

  # GET /consumables
  def index
    authorize consumables
    paginated_consumables = consumables.page(params[:page] || 1).per(current_user.limit(:consumables))

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
    authorize consumable
    render inertia: "Consumables/Show", props: {
      consumable: -> { consumable.render(view: :show) }
    }
  end

  # GET /consumables/new
  def new
    authorize Consumable
    render inertia: "Consumables/New", props: {
      consumable: Consumable.new.render(view: :form_data),
    }
  end

  # GET /consumables/:id/edit
  def edit
    authorize consumable
    render inertia: "Consumables/Edit", props: {
      consumable: consumable.render(view: :edit),
    }
  end

  # GET /consumables/:id/checkout
  def checkout
    authorize consumable
    redirect_to consumable if consumable.qty == 0

    assignment = Assignment.new
    assignment.assignable = consumable
    assignment.assign_toable_type = :Item

    render inertia: "Consumables/Checkout", props: {
      consumable: consumable.render,
      assignment: assignment.render(view: :form_data),
      items: -> { @active_company.items.select([:id, :name, :default_location_id]).render(view: :options) },
      people: -> { @active_company.people.select([:id, :first_name, :last_name, :location_id]).render(view: :options) },
      locations: -> { @active_company.locations.select([:id, :slug, :name]).render(view: :options) },
    }
  end

  # GET /consumables/:id/checkin
  def checkin
    authorize consumable
    redirect_to consumable if consumable.assignments.empty?
    assignment = consumable.assignment
    assignment.returned_at = Time.current
    assignment.active = false

    render inertia: "Consumables/Checkin", props: {
      consumable: consumable.render,
      assignment: assignment.render,
      locations: -> { @active_company.locations.select([:id, :slug, :name]).render(view: :options) },
      statuses: -> { StatusLabel.all.render }
    }
  end

  # POST /consumables
  def create
    authorize Consumable
    consumable.company = @active_company
    if consumable.save
      redirect_to consumable, notice: 'Consumable was successfully created'
    else
      redirect_to new_consumable_path, inertia: { errors: consumable.errors }
    end
  end

  # PATCH/PUT /consumables/:id
  def update
    authorize consumable
    if consumable.update(consumable_params)
      redirect_to consumable, notice: 'Consumable was successfully updated'
    else
      redirect_to edit_consumable_path, inertia: { errors: consumable.errors }
    end
  end

  # DELETE /consumables/:id
  def destroy
    authorize consumable
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
    params.require(:consumable).permit(:name, :min_qty, :qty, :cost, :serial, :asset_tag, :cost_currency, :requestable, :notes, :model_id, :manufacturer_id, :category_id, :vendor_id, :default_location_id)
  end
end
