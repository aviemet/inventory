class Vendors::ShowSerializer < Vendors::CountsSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )

  has_one :contact, serializer: ContactSerializer

  has_many :accessories, serializer: AccessorySerializer
  has_many :activities, serializer: ActivitySerializer
  has_many :components, serializer: ComponentSerializer
  has_many :contracts, serializer: ContractSerializer
  has_many :consumables, serializer: ConsumableSerializer
  has_many :items, serializer: ItemSerializer
end
