class Vendors::FormDataSerializer < ApplicationSerializer
  object_as :vendor

  identifier :slug

  attributes(
    :name,
    :url,
  )
end
