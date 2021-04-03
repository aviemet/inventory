class DepartmentsController < ApplicationController
  include ContactableConcern

  before_action :set_department, only: [:show, :edit, :update, :destroy]

  # GET /departments
  # GET /departments.json
  def index
    @departments = current_user.active_company.departments
  end

  # GET /departments/:id
  # GET /departments/:id.json
  def show
  end

  # GET /departments/new
  def new
    @department = Department.new
  end

  # GET /departments/:id/edit
  def edit
  end

  # POST /departments
  # POST /departments.json
  def create
    @department = Department.new(department_params)
    @department.company = Company.find(params[:company_id])

    respond_to do |format|
      if @department.save
        format.html { redirect_to company_url(@department.company), notice: 'Department was successfully created.' }
        format.json { render :show, status: :created, location: @department }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @department.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /departments/:id
  # PATCH/PUT /departments/:id.json
  def update
    respond_to do |format|
      if @department.update(department_params)
        format.html { redirect_to company_url(@department.company), notice: 'Department was successfully updated.' }
        format.json { render :show, status: :ok, location: @department }
      else
        format.html { render :edit }
        format.json { render json: @department.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /departments/:id
  # DELETE /departments/:id.json
  def destroy
    @department.destroy
    respond_to do |format|
      format.html { redirect_to company_url(@department.company), notice: 'Department was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_department
    @department = Department.find_by_slug(params[:id])
  end

  def department_params
    params.require(:department).permit(:name, :location_id)
  end
end
