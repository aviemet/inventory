class DepartmentSerializer < ApplicationSerializer
  object_as :department

  attributes(
    :name,
    :slug,
    :location_id,
    :notes,
    :created_at,
    :updated_at,
  )
end
