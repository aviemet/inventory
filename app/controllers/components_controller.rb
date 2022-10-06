class ComponentsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :components, -> { search(@active_company.components.includes_associated, sortable_fields) }
  expose :component

  # GET /components
  def index
    paginated_components = components.page(params[:page] || 1)

    render inertia: "Components/Index", props: {
      components: -> { paginated_components.render(view: :associations) },
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
      component: -> { component.render(view: :associations) }
    }
  end

  # GET /components/new
  def new
    render inertia: "Components/New", props: {
      component: Component.new.render(view: :new),
      models: -> { @active_company.models.find_by_category(:Item).render(view: :as_options) },
      vendors: -> { @active_company.vendors.render(view: :as_options) },
      locations: -> { @active_company.locations.render(view: :as_options) },
    }
  end

  # GET /components/:id/edit
  def edit
    render inertia: "Components/Edit", props: {
      component: component.render(view: :edit),
      models: -> { @active_company.models.find_by_category(:Item).render(view: :as_options) },
      vendors: -> { @active_company.vendors.render(view: :as_options) },
      locations: -> { @active_company.locations.render(view: :as_options) },
    }
  end
    
  # GET /components/:id/checkout
  def checkout
    redirect_to component if component.qty == 0

    assignment = Assignment.new
    assignment.assignable = component
    assignment.assign_toable_type = :Item

    render inertia: "Components/Checkout", props: {
      component: component.render,
      assignment: assignment.render(view: :new),
      items: -> { ItemBlueprint.render_as_json(@active_company.items.select([:id, :name, :default_location_id]), view: :as_options) },
      locations: -> { @active_company.locations.select([:id, :slug, :name]).render(view: :as_options) },
    }
  end

  #GET /components/:id/checkin
  def checkin
    redirect_to component unless component.assignments.size > 0
    assignment = component.assignment
    assignment.returned_at = Time.current
    assignment.active = false

    render inertia: "Components/Checkin", props: {
      component: component.render,
      assignment: assignment.render,
      locations: -> { @active_company.locations.select([:id, :slug, :name]).render(view: :as_options) },
      statuses: -> { StatusType.all.render }
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
    %w(name min_qty qty cost model.name model.model_number manufacturers.name categories.name vendors.name).freeze
  end

  def component_params
    params.require(:component).permit(:name, :model_id, :qty, :min_qty, :cost, :notes, :category_id, :manufacturer_id, :vendor_id, :default_location_id)
  end
end
