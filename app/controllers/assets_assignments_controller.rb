class AssetsAssignmentsController < ApplicationController
  before_action :set_assets_assignment, only: [:show, :edit, :update, :destroy]

  # GET /assets_assignments
  # GET /assets_assignments.json
  def index
    @assets_assignments = AssetsAssignment.all
  end

  # GET /assets_assignments/1
  # GET /assets_assignments/1.json
  def show
  end

  # GET /assets_assignments/new
  def new
    @assets_assignment = AssetsAssignment.new
  end

  # GET /assets_assignments/1/edit
  def edit
  end

  # POST /assets_assignments
  # POST /assets_assignments.json
  def create
    @assets_assignment = AssetsAssignment.new(assets_assignment_params)

    respond_to do |format|
      if @assets_assignment.save
        format.html { redirect_to @assets_assignment, notice: 'Assets assignment was successfully created.' }
        format.json { render :show, status: :created, location: @assets_assignment }
      else
        format.html { render :new }
        format.json { render json: @assets_assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /assets_assignments/1
  # PATCH/PUT /assets_assignments/1.json
  def update
    respond_to do |format|
      if @assets_assignment.update(assets_assignment_params)
        format.html { redirect_to @assets_assignment, notice: 'Assets assignment was successfully updated.' }
        format.json { render :show, status: :ok, location: @assets_assignment }
      else
        format.html { render :edit }
        format.json { render json: @assets_assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /assets_assignments/1
  # DELETE /assets_assignments/1.json
  def destroy
    @assets_assignment.destroy
    respond_to do |format|
      format.html { redirect_to assets_assignments_url, notice: 'Assets assignment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_assets_assignment
      @assets_assignment = AssetsAssignment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def assets_assignment_params
      params.require(:assets_assignment).permit(:asset_id, :person_id, :department_id, :active)
    end
end
