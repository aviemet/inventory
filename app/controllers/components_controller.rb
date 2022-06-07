class ComponentsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :components, -> { @active_company.components.includes_associated }
  expose :component

  before_action :set_view_data, only: [:index, :category]

  # GET /components(.json)
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

  # GET /components/:id(.json)
  def show
    render inertia: "Components/Show", props: {
      component: -> { ComponentBlueprint.render_as_json(component, view: :associations) }
    }
  end

  # GET /components/new
  def new
    render inertia: "Components/New", props: {
      component: ComponentBlueprint.render_as_json(Component.new, view: :new),
      models: @active_company.models.find_by_category(:Component).as_json,
      vendors: @active_company.vendors.as_json,
      locations: @active_company.locations.as_json,
    }
  end

  # GET /components/:id/edit
  def edit
    render inertia: "Components/Edit"
  end

  # POST /components(.json)
  def create
    component.company = @active_company
    if component.save
      redirect_to component
    else
      redirect_to new_component_path, inertia: { errors: component.errors }
    end
  end

  # PATCH/PUT /components/:id(.json)
  def update
    if component.update(component_params)
      redirect_to component
    else
      redirect_to edit_component_path, inertia: { errors: component.errors }
    end
  end

  # DELETE /components/:id(.json)
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

  def set_view_data
    @hideable_fields = { Model: "models.name", "Model Number": "models.model_number", Qty: "qty", "Min Qty": "min_qty",Category: "categories.name", Manufacturer: "manufacturers.name",  Vendor: "vendors.name", Cost: "cost", Department: "departments.name" }
  end

  def component_params
    params.require(:component).permit(:name, :model_id, :qty, :min_qty, :cost, :notes, :category_id, :manufacturer_id, :vendor_id, :default_location_id)
  end
end
