class Purchases::BasicSerializer < PurchaseSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  belongs_to :item, serializer: Items::BasicSerializer
  belongs_to :accessory, serializer: Accessories::BasicSerializer
  belongs_to :component, serializer: Components::BasicSerializer
  belongs_to :consumable, serializer: Consumables::BasicSerializer

  belongs_to :vendor, serializer: Vendors::OptionsSerializer
  belongs_to :order, serializer: Orders::BasicSerializer
end
