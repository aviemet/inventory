class Departments::FormDataSerializer < ApplicationSerializer
  object_as :department

  attributes(
    :name,
    :location_id,
    :notes,
  )

  belongs_to :location, serializer: Locations::OptionsSerializer, optional: true
end
