class ItemsAssignmentsController < ApplicationController
  before_action :set_items_assignment, only: [:show, :edit, :update, :destroy]

  # GET /items_assignments
  # GET /items_assignments.json
  def index
    @items_assignments = ItemsAssignment.all
  end

  # GET /items_assignments/1
  # GET /items_assignments/1.json
  def show
  end

  # GET /items_assignments/new
  def new
    @items_assignment = ItemsAssignment.new
  end

  # GET /items_assignments/1/edit
  def edit
  end

  # POST /items_assignments
  # POST /items_assignments.json
  def create
    @items_assignment = ItemsAssignment.new(items_assignment_params)

    respond_to do |format|
      if @items_assignment.save
        format.html { redirect_to @items_assignment, notice: 'Items assignment was successfully created.' }
        format.json { render :show, status: :created, location: @items_assignment }
      else
        format.html { render :new }
        format.json { render json: @items_assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /items_assignments/1
  # PATCH/PUT /items_assignments/1.json
  def update
    respond_to do |format|
      if @items_assignment.update(items_assignment_params)
        format.html { redirect_to @items_assignment, notice: 'Items assignment was successfully updated.' }
        format.json { render :show, status: :ok, location: @items_assignment }
      else
        format.html { render :edit }
        format.json { render json: @items_assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /items_assignments/1
  # DELETE /items_assignments/1.json
  def destroy
    @items_assignment.destroy
    respond_to do |format|
      format.html { redirect_to items_assignments_url, notice: 'Items assignment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_items_assignment
      @items_assignment = ItemsAssignment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def items_assignment_params
      params.require(:items_assignment).permit(:item_id, :person_id, :department_id, :active)
    end
end
