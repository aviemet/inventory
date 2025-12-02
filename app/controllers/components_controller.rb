class ComponentsController < ApplicationController
  include OwnableConcern

  expose :components, -> { search(@active_company.components.includes_associated) }
  expose :component, scope: ->{ @active_company.components }, find: ->(id, scope){ scope.includes_associated.find(id) }

  strong_params :component, [:name, :model_id, :qty, :min_qty, :cost, :notes, :category_id, :manufacturer_id, :vendor_id, :default_location_id, :status_label_id]

  sortable_fields %w(name min_qty qty cost model.name model.model_number manufacturers.name categories.name vendors.name)

  # @route GET /components (components)
  def index
    authorize components
    paginated_components = components.page(params[:page] || 1).per(current_user.limit(:components))

    render inertia: "Components/Index", props: {
      components: -> { paginated_components.render(view: :index) },
      pagination: -> { {
        count: components.count,
        **pagination_data(paginated_components)
      } }
    }
  end

  # @route GET /components/:id (component)
  def show
    authorize component
    render inertia: "Components/Show", props: {
      component: -> { component.render(view: :show) }
    }
  end

  # @route GET /components/new (new_component)
  def new
    authorize Component
    render inertia: "Components/New", props: {
      component: Component.new.render(view: :form_data),
    }
  end

  # @route GET /components/:id/edit (edit_component)
  def edit
    authorize component
    render inertia: "Components/Edit", props: {
      component: component.render(view: :edit),
    }
  end

  # @route GET /components/:id/checkout (checkout_component)
  def checkout
    authorize component
    redirect_to component if component.qty == 0

    assignment = Assignment.new
    assignment.assignable = component
    assignment.assign_toable_type = :Item

    render inertia: "Components/Checkout", props: {
      component: component.render(view: :show),
      assignment: assignment.render(view: :form_data),
      items: -> { @active_company.items.select([:id, :name, :default_location_id]).render(view: :options) },
      locations: -> { @active_company.locations.select([:id, :slug, :name]).render(view: :options) },
    }
  end

  # @route GET /components/:id/checkin/:assignment_id (checkin_component)
  def checkin
    authorize component
    redirect_to component if component.assignments.empty?

    assignment = component.assignment
    assignment.returned_at = Time.current
    assignment.active = false

    render inertia: "Components/Checkin", props: {
      component: component.render,
      assignment: assignment.render,
      locations: -> { @active_company.locations.select([:id, :slug, :name]).render(view: :options) },
      statuses: -> { StatusLabel.all.render }
    }
  end

  # @route POST /components (components)
  def create
    authorize Component
    component.company = @active_company
    if component.save
      redirect_to component
    else
      redirect_to new_component_path, inertia: { errors: component.errors }
    end
  end

  # @route PATCH /components/:id (component)
  # @route PUT /components/:id (component)
  def update
    authorize component
    if component.update(component_params)
      redirect_to component
    else
      redirect_to edit_component_path, inertia: { errors: component.errors }
    end
  end

  # @route DELETE /components (components)
  # @route DELETE /components/:id (component)
  def destroy
    authorize component
    component.destroy
    respond_to do |format|
      format.html { redirect_to components_url, notice: "Component was successfully destroyed." }
      format.json { head :no_content }
    end
  end
end
