class Api::DepartmentsController < Api::ApiController
  expose :departments, -> {  @active_company.departments }
  expose :department, id: ->{ params[:slug] }, scope: ->{ @active_company.departments.includes_associated }, find_by: :slug

  strong_params :department, [:name, :location_id, :manager_id, :notes]

  # @route GET /api/departments (api_departments)
  def index
    render json: departments.includes_associated.render
  end

  # @route GET /api/departments/:slug (api_department)
  def show
    render json: department.render
  end

  # @route GET /api/options/departments (api_departments_options)
  def options
    render json: departments.render(view: :options)
  end

  # @route POST /api/departments (api_departments)
  def create
    department.company = @active_company

    if department.save
      render json: department.render, status: :created
    else
      render json: { errors: department.errors }, status: :see_other
    end
  end

  # @route PATCH /api/departments/:slug (api_department)
  # @route PUT /api/departments/:slug (api_department)
  def update
    if department.update(department_params)
      render json: department.render, status: :created
    else
      render json: { errors: department.errors }, status: :see_other
    end
  end

  private
end
