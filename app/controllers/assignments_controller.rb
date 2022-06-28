class AssignmentsController < ApplicationController
  # before_action :redirect_if_already_assigned, only: [:create]

  expose :assignment

  # GET /assignments/:id
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
  def create
    assignable = assignment_params[:assignable_type].camelize.constantize.find(assignment_params[:assignable_id])
    assign_toable_decoded = ApplicationRecord.decode_id(assignment_params[:assign_toable_id])
    assign_toable = assign_toable_decoded[:model].constantize.find(assign_toable_decoded[:id])

    # assignment.assign_toable_id = ApplicationRecord.decode_id(assignment_params[:assign_toable_id])[:id]
    # assignment.created_by = current_user

    # if assignment.save
    if assignable.assign_to assign_toable, assignment_params.merge({ created_by: current_user })
      redirect_to assignable
    else
      redirect_to send("checkout_#{assignment_params[:assignable_type].downcase.singularize}_path", id: assignable.encode_id), inertia: { errors: assignment.errors }
    end
  end

  # PATCH/PUT /assignments/:id
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

  # PATCH/PUT /assignments/:id/checkin
  def unassign
    # assignable = assignment_params[:assignable_type].camelize.constantize.find(assignment_params[:assignable_id])
  end

  # DELETE /assignments/:id
  def destroy
    assignment.destroy
    respond_to do |format|
      format.html { redirect_to assignments_url, notice: 'Assignment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def redirect_if_already_assigned
    if @assignable.respond_to?(:assigned_to) && @assignable&.assigned_to
      redirect_back fallback_location: @assignable, alert: "An asset can only have one active assignment"
    end
  end

  def assignment_params
    params.require(:assignment).permit(:assignable_id, :assignable_type, :assign_toable_id, :assign_toable_type, :location_id, :assigned_at, :expected_at, :returned_at, :qty, :status, :notes, :active, item: [:name])
  end
end
