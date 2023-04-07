class VendorSerializer < ApplicationSerializer
  object_as :vendor

  identifier :slug

  attributes(
    :id,
    :name,
    :url,
    :created_at,
    :updated_at,
  )
end
