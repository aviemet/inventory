class DepartmentsController < ApplicationController
  before_action :set_department, only: [:show, :edit, :update, :destroy]

  # GET /companies/:company_id/departments
  # GET /companies/:company_id/departments.json
  def index
    @departments = Department.where(company: params[:company_id])
  end

  # GET /companies/:company_id/departments/:id
  # GET /companies/:company_id/departments/:id.json
  def show
  end

  # GET /companies/:company_id/departments/new
  def new
    @company = Company.find(params[:company_id])
    @department = Department.new
  end

  # GET /departments/:id/edit
  def edit
  end

  # POST /companies/:company_id/departments
  # POST /companies/:company_id/departments.json
  def create
    @department = Department.new(department_params)
    @department.company = Company.find(params[:company_id])

    respond_to do |format|
      if @department.save
        format.html { redirect_to company_url(@department.company), notice: 'Department was successfully created.' }
        format.json { render :show, status: :created, location: @department }
      else
        format.html { render :new }
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

  # Use callbacks to share common setup or constraints between actions.
  def set_department
    @department = Department.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def department_params
    params.require(:department).permit(:name, :location_id)
  end
end
