class Api::DepartmentsController < Api::ApiController
  expose :departments, -> {  @active_company.departments }
  expose :department, id: ->{ params[:slug] }, scope: ->{ @active_company.departments.includes_associated }, find_by: :slug

  # GET api/departments/options
  def index
    render json: departments.includes_associated.render
  end

  # GET api/departments/:slug
  def show
    render json: department.render
  end

  # GET api/options/departments
  def options
    render json: departments.render(view: :options)
  end

  # POST /api/departments
  def create
    department.company = @active_company

    if department.save
      render json: department.render, status: :created
    else
      render json: { errors: department.errors }, status: :see_other
    end
  end

  # PATCH/PUT /api/departments/:id
  def update
    if department.update(department_params)
      render json: department.render, status: :created
    else
      render json: { errors: department.errors }, status: :see_other
    end
  end

  private

  def department_params
    params.require(:department).permit(:name, :location_id, :manager_id, :notes)
  end
end
