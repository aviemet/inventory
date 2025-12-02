class AssignmentsController < ApplicationController
  expose :assignment

  strong_params :assignment, [:assignable_id, :assignable_type, :assign_toable_id, :assign_toable_type, :location_id, :assigned_at, :expected_at, :returned_at, :qty, :status, :notes, :active, item: [:name], accessory: [:name], license: [:name], component: [:name], consumable: [:qty]]

  # @route POST /assignments (assignments)
  def create
    # Assignable should always be valid
    assignment.assignable_type = assignment_params[:assignable_type]
    assignment.assignable_id = assignment_params[:assignable_id]

    # Assigntoable could be empty
    assignment.assign_toable_type = assignment_params[:assign_toable_type]
    assignment.assign_toable_id = assignment_params[:assign_toable_id]

    saved_assignment = assignment.assignable&.assign_to(assignment.assign_toable, assignment_params.merge({ created_by_id: current_user.id }))

    if saved_assignment.persisted?
      redirect_to assignment.assignable
    else
      redirect_to send(
        "checkout_#{assignment_params[:assignable_type].downcase.singularize}_path",
        id: assignment.assignable,
      ), inertia: { errors: assignment.errors }
    end
  end

  # @route PATCH /assignments/:id (assignment)
  # @route PUT /assignments/:id (assignment)
  def update
    assignable = assignment.assignable

    if assignment.update(assignment_params)
      redirect_to assignable
    else
      redirect_to send("checkin_#{assignment.assignable_type.downcase.singularize}_path", id: assignable), inertia: { errors: assignment.errors }
    end
  end

  # @route PATCH /assignments/:id/unassign (unassign_assignment)
  def unassign
    PublicActivity.enabled = false

    assignable = assignment.assignable
    returned_at = params.dig(:assignment, :returned_at) || params[:returned_at]

    if assignable.unassign(assignment, returned_at: returned_at)
      PublicActivity.enabled = true
      assignment.create_activity key: "assignment.end"
      redirect_to assignable
    else
      redirect_to(
        send(
          "checkin_#{assignment.assignable_type.downcase.singularize}_path",
          { id: assignable, assignment_id: assignment },
        ),
        inertia: { errors: assignment.errors },
      )
    end
  end

  # @route DELETE /assignments/:id (assignment)
  def destroy
    assignable = assignment.assignable
    assignment.destroy
    redirect_to assignable
  end

end
