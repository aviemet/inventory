class Categories::IndexSerializer < CategorySerializer
  object_as :category

  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
    qty: { type: :number },
  )
end
