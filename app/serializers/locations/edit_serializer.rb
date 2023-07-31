class Locations::EditSerializer < ApplicationSerializer
  object_as :location

  identifier :slug

  attributes(
    :id,
    :slug,
    :name,
    :parent_id,
    :currency,
  )

  belongs_to :parent, serializer: Locations::OptionsSerializer
end
