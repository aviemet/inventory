class ComponentsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :components, -> { search(@active_company.components.includes_associated, sortable_fields) }
  expose :component, scope: ->{ @active_company.components }, find: ->(id, scope){ scope.includes_associated.find(id) }

  # GET /components
  def index
    authorize components
    paginated_components = components.page(params[:page] || 1)

    render inertia: "Components/Index", props: {
      components: -> { paginated_components.render(view: :index) },
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
    authorize component
    render inertia: "Components/Show", props: {
      component: -> { component.render(view: :show) }
    }
  end

  # GET /components/new
  def new
    authorize Component
    render inertia: "Components/New", props: {
      component: Component.new.render(view: :form_data),
      models: -> { @active_company.models.find_by_category(:Component).render(view: :options) },
      vendors: -> { @active_company.vendors.render(view: :options) },
      locations: -> { @active_company.locations.render(view: :options) },
    }
  end

  # GET /components/:id/edit
  def edit
    authorize component
    render inertia: "Components/Edit", props: {
      component: component.render(view: :edit),
      models: -> { @active_company.models.find_by_category(:Component).render(view: :options) },
      vendors: -> { @active_company.vendors.render(view: :options) },
      locations: -> { @active_company.locations.render(view: :options) },
    }
  end

  # GET /components/:id/checkout
  def checkout
    authorize component
    redirect_to component if component.qty == 0

    assignment = Assignment.new
    assignment.assignable = component
    assignment.assign_toable_type = :Item

    render inertia: "Components/Checkout", props: {
      component: component.render,
      assignment: assignment.render(view: :form_data),
      items: -> { @active_company.items.select([:id, :name, :default_location_id]).render(view: :options) },
      locations: -> { @active_company.locations.select([:id, :slug, :name]).render(view: :options) },
    }
  end

  # GET /components/:id/checkin
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

  # POST /components
  def create
    authorize Component
    component.company = @active_company
    if component.save
      redirect_to component
    else
      redirect_to new_component_path, inertia: { errors: component.errors }
    end
  end

  # PATCH/PUT /components/:id
  def update
    authorize component
    if component.update(component_params)
      redirect_to component
    else
      redirect_to edit_component_path, inertia: { errors: component.errors }
    end
  end

  # DELETE /components/:id
  def destroy
    authorize component
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
    params.require(:component).permit(:name, :model_id, :qty, :min_qty, :cost, :notes, :category_id, :manufacturer_id, :vendor_id, :default_location_id, :status_label_id)
  end
end
