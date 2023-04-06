class AssignmentSerializer < ApplicationSerializer
  attributes(
    :assignable_type,
    :assignable_id,
    :assign_toable_type,
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
  )

  belongs_to :assign_toable, serializer: AssignToableSerializer
  belongs_to :assignable, serializer: AssignableSerializer
end
