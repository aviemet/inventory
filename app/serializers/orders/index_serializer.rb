class Orders::IndexSerializer < OrderSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  belongs_to :vendor, serializer: Vendors::OptionsSerializer, optional: true
end
