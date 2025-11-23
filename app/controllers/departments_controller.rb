class DepartmentsController < ApplicationController

  include ContactableConcern

  expose :departments, -> { search(@active_company.departments.includes_associated, sortable_fields) }
  expose :department, id: ->{ params[:slug] }, scope: ->{ @active_company.departments.includes_associated }, find_by: :slug

  # @route GET /departments (departments)
  def index
    authorize departments
    paginated_departments = departments.page(params[:page] || 1).per(current_user.limit(:departments))

    render inertia: "Departments/Index", props: {
      departments: paginated_departments.render(view: :index),
      pagination: -> { {
        count: departments.count,
        **pagination_data(paginated_departments)
      } }
    }
  end

  # @route GET /departments/:slug (department)
  def show
    authorize department
    render inertia: "Departments/Show", props: {
      department: department.render(view: :show),
      items: InertiaRails.optional {
        paginated_items = department.items.includes_associated.page(params[:page] || 1)
        {
          data: paginated_items.render,
          pagination: {
            count: department.items.size,
            **pagination_data(paginated_items)
          }
        }
      },
      accessories: InertiaRails.optional {
        paginated_accessories = department.accessories.includes_associated.page(params[:page] || 1)
        {
          data: paginated_accessories.render,
          pagination: {
            count: department.accessories.size,
            **pagination_data(paginated_accessories)
          }
        }
      },
      consumables: InertiaRails.optional {
        paginated_consumables = department.consumables.includes_associated.page(params[:page] || 1)
        {
          data: paginated_consumables.render,
          pagination: {
            count: department.consumables.size,
            **pagination_data(paginated_consumables)
          }
        }
      },
      components: InertiaRails.optional {
        paginated_components = department.components.includes_associated.page(params[:page] || 1)
        {
          data: paginated_components.render,
          pagination: {
            count: department.components.size,
            **pagination_data(paginated_components)
          }
        }
      },
      licenses: InertiaRails.optional {
        paginated_licenses = department.licenses.includes_associated.page(params[:page] || 1)
        {
          data: paginated_licenses.render,
          pagination: {
            count: department.licenses.size,
            **pagination_data(paginated_licenses)
          }
        }
      },
      people: InertiaRails.optional {
        paginated_people = department.people.includes_associated.page(params[:page] || 1)
        {
          data: paginated_people.render,
          pagination: {
            count: department.people.size,
            **pagination_data(paginated_people)
          }
        }
      },
    }
  end

  # @route GET /departments/new (new_department)
  def new
    authorize Department
    render inertia: "Departments/New", props: {
      department: Department.new.render(view: :form_data),
    }
  end

  # @route GET /departments/:slug/edit (edit_department)
  def edit
    authorize department
    render inertia: "Departments/Edit", props: {
      department: department.render(view: :edit),
    }
  end

  # @route POST /departments (departments)
  def create
    authorize Department
    department = Department.new(department_params)
    department.company = @active_company

    if department.save
      redirect_to department, notice: 'Department was successfully created'
    else
      redirect_to new_department_path, inertia: { errors: department.errors }
    end
  end

  # @route PATCH /departments/:slug (department)
  # @route PUT /departments/:slug (department)
  def update
    authorize department
    if department.update(department_params)
      redirect_to department, notice: 'Department was successfully updated'
    else
      redirect_to edit_department_path, inertia: { errors: department.errors }
    end
  end

  # @route DELETE /departments (departments)
  # @route DELETE /departments/:slug (department)
  def destroy
    authorize department
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
