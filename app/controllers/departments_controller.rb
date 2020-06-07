class DepartmentsController < ApplicationController
  before_action :set_department, only: [:show, :edit, :update, :destroy]
  before_action :set_company_id, only: [:index, :show]

  # GET /companies/:company_id/departments
  # GET /companies/:company_id/departments.json
  def index
    @departments = Department.all
  end

  # GET /companies/:company_id/departments/1
  # GET /companies/:company_id/departments/1.json
  def show
  end

  # GET /companies/:company_id/departments/new
  def new
    @company = Company.find(params[:company_id])
    @department = Department.new
  end

  # GET /companies/:company_id/departments/1/edit
  def edit
    @company = Company.find(params[:company_id])
  end

  # POST /companies/:company_id/departments
  # POST /companies/:company_id/departments.json
  def create
    @department = Department.new(department_params)
    @department.company = Company.find(params[:company_id])

    respond_to do |format|
      if @department.save
        format.html { redirect_to company_url(params[:company_id]), notice: 'Department was successfully created.' }
        format.json { render :show, status: :created, location: @department }
      else
        format.html { render :new }
        format.json { render json: @department.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /companies/:company_id/departments/1
  # PATCH/PUT /companies/:company_id/departments/1.json
  def update
    respond_to do |format|
      if @department.update(department_params)
        format.html { redirect_to company_url(params[:company_id]), notice: 'Department was successfully updated.' }
        format.json { render :show, status: :ok, location: @department }
      else
        format.html { render :edit }
        format.json { render json: @department.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /companies/:company_id/departments/1
  # DELETE /companies/:company_id/departments/1.json
  def destroy
    @department.destroy
    respond_to do |format|
      format.html { redirect_to company_departments_url(params[:company_id]), notice: 'Department was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_department
    @department = Department.find(params[:id])
  end

  def set_company_id
    @company_id = params[:company_id]
  end

  # Only allow a list of trusted parameters through.
  def department_params
    params.require(:department).permit(:name)
  end
end
