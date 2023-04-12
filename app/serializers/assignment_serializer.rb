class AssignmentSerializer < ApplicationSerializer

  attributes(
    :assignable_id,
    :assign_toable_id,
    :qty,
    :status,
    :location_id,
    :assigned_at,
    :returned_at,
    :expected_at,
    :notes,
    :active,
    :created_by_id,
    :created_at,
    :updated_at,
    assign_toable_type: { type: :TAssignToable },
    assignable_type: { type: :TAssignable },
  )

  belongs_to :assign_toable, serializer: AssignToableSerializer
  belongs_to :assignable, serializer: AssignableSerializer
end
