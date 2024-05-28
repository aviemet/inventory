class Vendors::IndexSerializer < Vendors::CountsSerializer
  object_as :vendor

  identifier :slug

  attributes(
    :id,
    :slug,
    :name,
    :url,
    :created_at,
    :updated_at,
  )

  has_one :contact, serializer: ContactSerializer

  has_many :accessories, serializer: AccessorySerializer
  has_many :components, serializer: ComponentSerializer
  has_many :contracts, serializer: ContractSerializer
  has_many :consumables, serializer: ConsumableSerializer
  has_many :items, serializer: ItemSerializer
end
