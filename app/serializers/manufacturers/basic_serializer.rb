class Manufacturers::BasicSerializer < ManufacturerSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )
end
