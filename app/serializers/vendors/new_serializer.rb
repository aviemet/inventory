class Vendors::NewSerializer < ApplicationSerializer
  object_as :vendor

  identifier :slug

  attributes(
    :id,
    :name,
    :url,
  )
end
