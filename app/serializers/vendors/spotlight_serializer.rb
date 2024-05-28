class Vendors::SpotlightSerializer < ApplicationSerializer
  object_as :vendor

  identifier :slug

  attributes(
    :slug,
    :name,
    :url,
    id: { type: :string },
  )
end
