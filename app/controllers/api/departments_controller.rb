class Api::DepartmentsController < ApplicationController
  expose :department, -> { @active_company.departments.find_by_slug params[:slug] }

  # POST /api/departments
  def create
    department.company = @active_company

    if department.save
      render json: DepartmentBlueprint.render_as_json(department), status: 201
    else
      render json: { errors: department.errors }, status: 303
    end
  end

  # PATCH/PUT /api/departments/:id
  def update
    if department.update(department_params)
      render json: DepartmentBlueprint.render_as_json(department), status: 201
    else
      render json: { errors: department.errors }, status: 303
    end
  end

  private

  def department_params
    params.require(:department).permit(:name, :location_id, :manager_id)
  end
end
