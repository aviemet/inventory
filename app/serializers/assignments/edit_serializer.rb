class Assignments::EditSerializer < ApplicationSerializer
  attributes(
    :assignable_type,
    :assignable_id,
    :assign_toable_id,
    :assign_toable_type,
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

end
