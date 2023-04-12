class Vendors::EditSerializer < ApplicationSerializer
  object_as :vendor

  identifier :slug

  attributes(
    :id,
    :slug,
    :name,
    :url,
  )
end
