class ComponentsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :components, -> { @active_company.components.includes_associated }
  expose :component

  # GET /components
  def index
    self.components = search(components, sortable_fields)
    paginated_components = components.page(params[:page] || 1)

    render inertia: "Components/Index", props: {
      components: -> { ComponentBlueprint.render_as_json(paginated_components, view: :associations) },
      pagination: -> { {
        count: components.count,
        **pagination_data(paginated_components)
      } }
    }
  end

  # TODO: Decide if this is how I want to do category searches
  # GET /components/category/:category_id
  # GET /components/category/:category_id.json
  # def category
  #   self.components = components.where('model.category': Category.find(request.params[:category_id]))
  #   render :index
  #   render inertia: "Components/Category"
  # end

  # GET /components/:id
  def show
    render inertia: "Components/Show", props: {
      component: -> { ComponentBlueprint.render_as_json(component, view: :associations) }
    }
  end

  # GET /components/new
  def new
    render inertia: "Components/New", props: {
      component: ComponentBlueprint.render_as_json(Component.new, view: :new),
      models: -> { ModelBlueprint.render_as_json(@active_company.models.find_by_category(:Item), view: :as_options) },
      vendors: -> { VendorBlueprint.render_as_json(@active_company.vendors, view: :as_options) },
      locations: -> { LocationBlueprint.render_as_json(@active_company.locations, view: :as_options) },
    }
  end

  # GET /components/:id/edit
  def edit
    render inertia: "Components/Edit", props: {
      component: ComponentBlueprint.render_as_json(component),
      models: -> { ModelBlueprint.render_as_json(@active_company.models.find_by_category(:Item), view: :as_options) },
      vendors: -> { VendorBlueprint.render_as_json(@active_company.vendors, view: :as_options) },
      locations: -> { LocationBlueprint.render_as_json(@active_company.locations, view: :as_options) },
    }
  end
    
  # GET /components/:id/checkout
  def checkout
    redirect_to component if component.qty == 0

    assignment = Assignment.new
    assignment.assignable = component
    assignment.assign_toable_type = :Item

    render inertia: "Components/Checkout", props: {
      component: ComponentBlueprint.render_as_json(component),
      assignment: AssignmentBlueprint.render_as_json(assignment, view: :new),
      items: -> { ItemBlueprint.render_as_json(@active_company.items.select([:id, :name, :default_location_id]), view: :as_options) },
      locations: -> { LocationBlueprint.render_as_json(@active_company.locations.select([:id, :slug, :name]), view: :as_options) },
    }
  end

  #GET /components/:id/checkin
  def checkin
    redirect_to component unless component.assignments.size > 0
    assignment = component.assignment
    assignment.returned_at = Time.current
    assignment.active = false

    render inertia: "Components/Checkin", props: {
      component: ComponentBlueprint.render_as_json(component),
      assignment: AssignmentBlueprint.render_as_json(assignment),
      locations: -> { LocationBlueprint.render_as_json(@active_company.locations.select([:id, :slug, :name]), view: :as_options) },
      statuses: -> { StatusTypeBlueprint.render_as_json(StatusType.all) }
    }
  end

  # POST /components
  def create
    component.company = @active_company
    if component.save
      redirect_to component
    else
      redirect_to new_component_path, inertia: { errors: component.errors }
    end
  end

  # PATCH/PUT /components/:id
  def update
    if component.update(component_params)
      redirect_to component
    else
      redirect_to edit_component_path, inertia: { errors: component.errors }
    end
  end

  # DELETE /components/:id
  def destroy
    component.destroy
    respond_to do |format|
      format.html { redirect_to components_url, notice: "Component was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name model_number min_qty qty cost manufacturers.name categories.name vendors.name).freeze
  end

  def component_params
    params.require(:component).permit(:name, :model_id, :qty, :min_qty, :cost, :notes, :category_id, :manufacturer_id, :vendor_id, :default_location_id)
  end
end
