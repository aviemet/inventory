class Manufacturers::IndexSerializer < Manufacturers::CountsSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )
end
