class Departments::EditSerializer < ApplicationSerializer
  object_as :department

  attributes(
    :id,
    :name,
    :slug,
    :location_id,
    :notes,
  )

end
