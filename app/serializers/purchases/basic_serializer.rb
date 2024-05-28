class Purchases::BasicSerializer < PurchaseSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  belongs_to :purchasable, serializer: PurchasableSerializer

  belongs_to :order, serializer: Orders::BasicSerializer
end
