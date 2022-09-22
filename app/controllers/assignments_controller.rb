class AssignmentsController < ApplicationController
  # before_action :redirect_if_already_assigned, only: [:create]

  expose :assignment

  # GET /assignments/:id
  def show
    render inertia: "Assignments/Show", props: {
      assignment: assignment.render
    }
  end

  # GET /assignments/:id/edit
  def edit
    @assignable = assignment.assignable
    render inertia: "Assignments/Edit", props: {
      assignment: assignment.render(view: :edit)
    }
  end

  # POST /assignments/
  def create
    # Assignable should always be valid
    assignment.assignable_type = assignment_params[:assignable_type]
    assignment.assignable_id = assignment_params[:assignable_id]

    # Assigntoable could be empty
    assignment.assign_toable_type = assignment_params[:assign_toable_type]
    assignment.assign_toable_id = assignment_params[:assign_toable_id]

    if assignment.valid? && assignment.assignable&.assign_to(assignment.assign_toable, assignment_params.merge({ created_by_id: current_user.id })).persisted?
      redirect_to assignment.assignable
    else
      redirect_to send(
        "checkout_#{assignment_params[:assignable_type].downcase.singularize}_path", 
        id: assignment.assignable
      ), inertia: { errors: assignment.errors }
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
    params.require(:assignment).permit(:assignable_id, :assignable_type, :assign_toable_id, :assign_toable_type, :location_id, :assigned_at, :expected_at, :returned_at, :qty, :status, :notes, :active, item: [:name], accessory: [:name], license: [:name], component: [:name], consumable: [:qty])
  end
end
