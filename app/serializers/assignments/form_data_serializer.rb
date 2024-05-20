class Assignments::FormDataSerializer < ApplicationSerializer
  object_as :assignment

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
    assign_toable_type: { type: :AssignToable },
    assignable_type: { type: :Assignable },
  )

end
