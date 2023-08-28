class Locations::FormDataSerializer < ApplicationSerializer
  object_as :location

  identifier :slug

  attributes(
    :name,
    :parent_id,
    :currency,
  )

  belongs_to :parent, serializer: Locations::OptionsSerializer, optional: true
end
