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

  # POST /assignments/
  def create
    assignable = assignment_params[:assignable_type].camelize.constantize.find(assignment_params[:assignable_id])
    assign_toable = assignment_params[:assign_toable_type].camelize.constantize.find(assignment_params[:assign_toable_id])
    
    if assignable.assign_to assign_toable, assignment_params.merge({ created_by: current_user })
      redirect_to assignable
    else
      redirect_to send("checkout_#{assignment_params[:assignable_type].downcase.singularize}_path", id: assignable), inertia: { errors: assignment.errors }
    end
  end

  # PATCH/PUT /assignments/:id
  def update
    assignable = assignment.assignable
    if assignment.update(assignment_params)
      redirect_to assignable
    else
      redirect_to send("checkin_#{assignment.assignable_type.downcase.singularize}_path", id: assignable), inertia: { errors: assignment.errors }
    end
  end

  # PATCH/PUT /assignments/:id/unassign
  def unassign
    assignable = assignment.assignable
    if assignable.unassign(assignment, returned_at: assignment_params&.[](:returned_at))
      redirect_to assignable
    else
      redirect_to send("checkin_#{assignment.assignable_type.downcase.singularize}_path", id: assignable), inertia: { errors: assignment.errors }
    end
  end

  # DELETE /assignments/:id
  def destroy
    assignable = assignment.assignable
    assignment.destroy
    redirect_to assignable
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
