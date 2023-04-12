class DepartmentSerializer < ApplicationSerializer
  object_as :department

  attributes(
    :id,
    :name,
    :slug,
    :location_id,
    :notes,
    :created_at,
    :updated_at,
  )
end
