class AssignmentsController < ApplicationController
  before_action :set_assignment, only: [:show, :edit, :update, :destroy]
  before_action :set_asset, only: [:index, :new, :create, :end]
  before_action :redirect_if_already_assigned, only: [:new, :create]

  # GET /assignments/:asset_type/:asset_id
  # GET /assignments/:asset_type/:asset_id.json
  def index
    @assignments = Assignment.all
  end

  # GET /assignments/:id
  # GET /assignments/:id.json
  def show
  end

  # GET /checkout/:asset_type/:asset_id
  def new
    @assignment = Assignment.new
  end

  # GET /assignments/:id/edit
  def edit
    @asset = @assignment.assignable
  end

  # GET /checkin/:asset_type/:asset_id
  def end
    @assignment = @asset.assignment
  end

  # POST /assignments/:asset_type/:asset_id
  # POST /assignments/:asset_type/:asset_id.json
  def create
    assignable = params[:asset_type].capitalize.constantize.find( params[:asset_id])
    assign_toable = assignment_params[:assign_toable_type].capitalize.constantize.find(assignment_params[:assign_toable_id])

    @assignment = assignable.update(name: assignment_params[params[:asset_type]][:name])

    respond_to do |format|
      if assignable.assign_to assign_toable, assigned_at: assignment_params[:assigned_at], expected_at: assignment_params[:expected_at]
        format.html { redirect_to @asset, notice: 'Assignment was successfully created.' }
        format.json { render :show, status: :created, location: @asset }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /assignments/:id
  # PATCH/PUT /assignments/:id.json
  def update
    respond_to do |format|
      if @assignment.update(assignment_params)
        format.html { redirect_to @assignment, notice: 'Assignment was successfully updated.' }
        format.json { render :show, status: :ok, location: @assignment }
      else
        format.html { render :edit }
        format.json { render json: @assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /assignments/:id
  # DELETE /assignments/:id.json
  def destroy
    @assignment.destroy
    respond_to do |format|
      format.html { redirect_to assignments_url, notice: 'Assignment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_assignment
    @assignment = Assignment.find(params[:id])
  end

  def set_asset
    asset_class = params[:asset_type].capitalize.constantize
    @asset = asset_class.find(params[:asset_id])
  end

  def redirect_if_already_assigned
    if @asset&.assigned_to
      redirect_back fallback_location: @asset, alert: "An asset can only have one active assignment"
    end
  end

  def assignment_params
    params.require(:assignment).permit(:assign_toable_id, :assign_toable_type, :assigned_at, :expected_at, :returned_at, :notes, :active, item: [:name], accessory: [:name], consumable: [:name])
  end
end
