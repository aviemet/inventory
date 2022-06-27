class AssignmentsController < ApplicationController
  # before_action :set_assignment, only: [:show, :edit, :update, :destroy]
  # before_action :set_assignable, only: [:create] #, :end, :checkin]
  # before_action :redirect_if_already_assigned, only: [:create]

  expose :assignment
  # expose :assignable, -> { }

  # GET /assignments/:id
  # GET /assignments/:id.json
  def show
    render inertia: "Assignments/Show", props: {
      assignment: assignment
    }
  end

  # GET /assignments/:id/edit
  def edit
    @assignable = assignment.assignable
    render inertia: "Assignments/Edit", props: {
      assignment: assignment
    }
  end

  # POST /assignments/:asset_type/:asset_id
  # POST /assignments/:asset_type/:asset_id.json
  def create
    assignable = assignment_params[:assignable_type].camelize.constantize.find(assignment_params[:assignable_id])
    assignment.assign_toable_id = ApplicationRecord.decode_id(assignment_params[:assign_toable_id])[:id]
    if assignment.save
      redirect_to assignable
    else
      redirect_to send("checkout_#{assignment_params[:assignable_type].downcase.singularize}_path", id: assignable.encode_id), inertia: { errors: assignment.errors }
    end
  end

  # PATCH/PUT /assignments/:id
  # PATCH/PUT /assignments/:id.json
  def update
    respond_to do |format|
      if assignment.update(assignment_params)
        format.html { redirect_to @assignment, notice: 'Assignment was successfully updated.' }
        format.json { render :show, status: :ok, location: @assignment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /assignments/:id
  # DELETE /assignments/:id.json
  def destroy
    assignment.destroy
    respond_to do |format|
      format.html { redirect_to assignments_url, notice: 'Assignment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_assignable
    asset_class = params[:assignable_type].capitalize.constantize
    raise "\"#{asset_class.name}\" is not an assignable asset type" unless asset_class.include?(Assignable)

    @assignable = asset_class.find(params[:assignable_id])
  end

  def redirect_if_already_assigned
    if @assignable.respond_to?(:assigned_to) && @assignable&.assigned_to
      redirect_back fallback_location: @assignable, alert: "An asset can only have one active assignment"
    end
  end

  def assignment_params
    params.require(:assignment).permit(:assignable_id, :assignable_type, :assign_toable_id, :assign_toable_type, :location_id, :assigned_at, :expected_at, :returned_at, :qty, :status, :notes, :active, item: [:name])
  end

  def find_assignable(asset_type:, asset_id:)
    asset_type.capitalize.constantize.find(asset_id)
  end

  def find_assign_toable
    assignment_params[:assign_toable_type].capitalize.constantize.find(assignment_params[:assign_toable_id])
  end
end
