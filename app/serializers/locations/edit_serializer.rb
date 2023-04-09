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
end
