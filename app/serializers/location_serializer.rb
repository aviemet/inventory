class LocationSerializer < ApplicationSerializer
  object_as :location

  identifier :slug

  attributes(
    :name,
    :parent_id,
    :currency,
    :created_at,
    :updated_at,
  )
end
