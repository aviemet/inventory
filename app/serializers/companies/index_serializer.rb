class Companies::IndexSerializer < Companies::CountsSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )
end
