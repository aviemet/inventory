class DepartmentsController < ApplicationController
  include ContactableConcern

  expose :departments, -> { current_user.active_company.departments }
  expose :department, find_by: :slug

  # GET /departments
  # GET /departments.json
  def index
    render inertia: "Departments/Index"
  end

  # GET /departments/:id
  # GET /departments/:id.json
  def show
    render inertia: "Departments/Show"
  end

  # GET /departments/new
  def new
    render inertia: "Departments/New"
  end

  # GET /departments/:id/edit
  def edit
    render inertia: "Departments/Edit"
  end

  # POST /departments
  # POST /departments.json
  def create
    self.department.company = Company.find(params[:company_id])
    respond_to do |format|
      if department.save
        format.html { redirect_to company_url(department.company), notice: 'Department was successfully created.' }
        format.json { render :show, status: :created, location: department }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: department.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /departments/:id
  # PATCH/PUT /departments/:id.json
  def update
    respond_to do |format|
      if department.update(department_params)
        format.html { redirect_to company_url(department.company), notice: 'Department was successfully updated.' }
        format.json { render :show, status: :ok, location: department }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: department.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /departments/:id
  # DELETE /departments/:id.json
  def destroy
    department.destroy
    respond_to do |format|
      format.html { redirect_to company_url(department.company), notice: 'Department was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def department_params
    params.require(:department).permit(:name, :location_id)
  end
end
