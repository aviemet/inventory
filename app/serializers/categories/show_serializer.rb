class Categories::ShowSerializer < CategorySerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
    qty: { type: :number },
  )
end
