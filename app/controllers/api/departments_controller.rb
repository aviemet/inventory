class Api::DepartmentsController < ApplicationController
  expose :department, id: ->{ params[:slug] }, scope: ->{ @active_company.departments.includes_associated }, find_by: :slug

  # POST /api/departments
  def create
    department.company = @active_company

    if department.save
      render json: department.render, status: 201
    else
      render json: { errors: department.errors }, status: 303
    end
  end

  # PATCH/PUT /api/departments/:id
  def update
    if department.update(department_params)
      render json: department.render, status: 201
    else
      render json: { errors: department.errors }, status: 303
    end
  end

  private

  def department_params
    params.require(:department).permit(:name, :location_id, :manager_id, :notes)
  end
end
