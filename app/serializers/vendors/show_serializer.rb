class Vendors::ShowSerializer < ApplicationSerializer
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

  type "{
    items: number
    accessories: number
    consumables: number
    components: number
    licenses: number
    contracts: number
  }"
  def counts
    {
      items: vendor.items.size,
      accessories: vendor.accessories.size,
      consumables: vendor.consumables.size,
      components: vendor.components.size,
      licenses: vendor.licenses.size,
      contracts: vendor.contracts.size,
    }
  end

  has_one :contact, serializer: ContactSerializer
  has_many :activities, serializer: ActivitySerializer
  has_many :contracts, serializer: ContractSerializer
  has_many :items, serializer: ItemSerializer
  has_many :accessories, serializer: AccessorySerializer
  has_many :consumables, serializer: ConsumableSerializer
  has_many :components, serializer: ComponentSerializer
end
