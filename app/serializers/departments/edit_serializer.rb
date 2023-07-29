class Departments::EditSerializer < ApplicationSerializer
  object_as :department

  attributes(
    :id,
    :name,
    :slug,
    :location_id,
    :notes,
  )

  belongs_to :location, serializer: Locations::OptionsSerializer, optional: true
end
