class DepartmentsController < ApplicationController
  include Searchable
  include ContactableConcern

  expose :departments, -> { search(@active_company.departments.includes_associated, sortable_fields) }
  expose :department, -> { @active_company.departments.find_by_slug(params[:slug]) }

  # GET /departments
  def index
    paginated_departments = departments.page(params[:page] || 1)

    render inertia: "Departments/Index", props: {
      departments: paginated_departments.render(view: :index),
      pagination: -> { {
        count: departments.count,
        **pagination_data(paginated_departments)
      } }
    }
  end

  # GET /departments/:slug
  def show
    render inertia: "Departments/Show", props: {
      department:department.render(view: :show),
      items: -> {
        paginated_items = department.items.includes_associated.page(params[:page] || 1)
        {
          data: paginated_items.render(view: :associations),
          pagination: {
            count: department.items.size,
            **pagination_data(paginated_items)
          }
        }
      },
      accessories: InertiaRails.lazy(-> { 
        paginated_accessories = department.accessories.includes_associated.page(params[:page] || 1)
        {
          data: paginated_accessories.render(view: :associations),
          pagination: {
            count: department.accessories.size,
            **pagination_data(paginated_accessories)
          }
        }
      }),
      consumables: InertiaRails.lazy(-> { 
        paginated_consumables = department.consumables.includes_associated.page(params[:page] || 1)
        {
          data: paginated_consumables.render(view: :associations),
          pagination: {
            count: department.consumables.size,
            **pagination_data(paginated_consumables)
          }
        }
      }),
      components: InertiaRails.lazy(-> { 
        paginated_components = department.components.includes_associated.page(params[:page] || 1)
        {
          data: paginated_components.render(view: :associations),
          pagination: {
            count: department.components.size,
            **pagination_data(paginated_components)
          }
        }
      }),
      licenses: InertiaRails.lazy(-> { 
        paginated_licenses = department.licenses.includes_associated.page(params[:page] || 1)
        {
          data: paginated_licenses.render(view: :associations),
          pagination: {
            count: department.licenses.size,
            **pagination_data(paginated_licenses)
          }
        }
      }),
      people: InertiaRails.lazy(-> { 
        paginated_people = department.people.includes_associated.page(params[:page] || 1)
        {
          data: paginated_people.render(view: :associations),
          pagination: {
            count: department.people.size,
            **pagination_data(paginated_people)
          }
        }
      }),
    }
  end

  # GET /departments/new
  def new
    render inertia: "Departments/New", props: {
      department: Department.new.render(view: :new),
      locations: -> { @active_company.locations.render(view: :as_options) }
    }
  end

  # GET /departments/:slug/edit
  def edit
    render inertia: "Departments/Edit", props: {
      department: department.render(view: :edit),
      locations: -> { @active_company.locations.render(view: :as_options) }
    }
  end

  # POST /departments
  def create
    department = Department.new(department_params)
    department.company = @active_company

    if department.save
      redirect_to department, notice: 'Department was successfully created'
    else
      redirect_to new_department_path, inertia: { errors: department.errors }
    end
  end

  # PATCH/PUT /departments/:slug
  def update
    if department.update(department_params)
      redirect_to department, notice: 'Department was successfully updated'
    else
      redirect_to edit_department_path, inertia: { errors: department.errors }
    end
  end

  # DELETE /departments/:slug
  def destroy
    department.destroy
    redirect_to departments_url, notice: 'Department was successfully destroyed.'
  end

  private

  def sortable_fields
    %w(name items.count accessories.count components.count consumables.count people.count).freeze
  end

  def department_params
    params.require(:department).permit(:name, :slug, :location_id, :notes)
  end
end
