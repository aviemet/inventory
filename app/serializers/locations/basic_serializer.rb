class Locations::BasicSerializer < LocationSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )

  belongs_to :parent, serializer: Locations::BasicSerializer
end
