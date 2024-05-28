class Orders::BasicSerializer < OrderSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  belongs_to :vendor, serializer: Vendors::OptionsSerializer
end
