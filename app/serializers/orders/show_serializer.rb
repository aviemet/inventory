class Orders::ShowSerializer < OrderSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  belongs_to :person, serializer: People::BasicSerializer
  belongs_to :vendor, serializer: Vendors::OptionsSerializer

  has_many :purchases, serializer: Purchases::BasicSerializer
end
