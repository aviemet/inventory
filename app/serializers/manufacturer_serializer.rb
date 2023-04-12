class ManufacturerSerializer < ApplicationSerializer
  object_as :manufacturer

  identifier :slug

  attributes(
    :id,
    :slug,
    :name,
    :created_at,
    :updated_at,
  )
end
