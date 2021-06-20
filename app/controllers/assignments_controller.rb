class AssignmentsController < ApplicationController
  before_action :set_assignment, only: [:show, :edit, :update, :destroy]
  before_action :set_assignable, only: [:index, :new, :create, :end, :checkin]
  before_action :redirect_if_already_assigned, only: [:new, :create]

  # GET /assignments/:asset_type/:asset_id
  # GET /assignments/:asset_type/:asset_id.json
  def index
    @assignments = Assignment.where(assignable_type: params[:asset_type].capitalize, assignable_id: params[:asset_id])
  end

  # GET /assignments/:id
  # GET /assignments/:id.json
  def show
  end

  # GET /checkout/:asset_type/:asset_id
  def new
    @assignment = Assignment.new
    render "#{params[:asset_type].downcase.pluralize}/checkout"
  end

  # GET /checkin/:asset_type/:asset_id
  def end
    @assignment = @assignable.assignment
  end

  # GET /assignments/:id/edit
  def edit
    @assignable = @assignment.assignable
  end

  # POST /assignments/:asset_type/:asset_id
  # POST /assignments/:asset_type/:asset_id.json
  def create
    assign_toable = find_assign_toable(assign_toable_type: assignment_params[:assign_toable_type], assign_toable_id: assignment_params[:assign_toable_id])

    respond_to do |format|
      if @assignable.assign_to(assign_toable, assignment_params)
        format.html { redirect_to @assignable, notice: 'Assignment was successfully created.' }
        format.json { render :show, status: :created, location: @assignable }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @assignable.errors, status: :unprocessable_entity }
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
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /assignments/checkin/:asset_type/:asset_id
  # PATCH/PUT /assignments/checkin/:asset_type/:asset_id.json
  def checkin
    asset_class = params[:asset_type].downcase
    respond_to do |format|
      if @assignment = @assignable.unassign(returned_at: params[:returned_at], name: params[:assignment][asset_class][:name])
        format.html { redirect_to @assignable, notice: "#{params[:asset_type].capitalize} has been checked in" }
        format.json { render :show, status: :ok, location: @assignable }
      else
        format.html { render :end, status: :unprocessable_entity }
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

  def set_assignable
    asset_class = params[:asset_type].capitalize.constantize
    raise "\"#{asset_class.name}\" is not an assignable asset type" unless asset_class.include?(Assignable)

    @assignable = asset_class.find(params[:asset_id])
  end

  def redirect_if_already_assigned
    if @assignable.respond_to?(:assigned_to) && @assignable&.assigned_to
      redirect_back fallback_location: @assignable, alert: "An asset can only have one active assignment"
    end
  end

  def assignment_params
    params.require(:assignment).permit(:assign_toable_id, :assign_toable_type, :assigned_at, :expected_at, :returned_at, :qty, :status, :notes, :active, item: [:name])
  end

  def find_assignable(asset_type:, asset_id:)
    asset_type.capitalize.constantize.find(asset_id)
  end

  def find_assign_toable(assign_toable_type:, assign_toable_id:)
    assign_toable_type.capitalize.constantize.find(assign_toable_id)
  end
end
