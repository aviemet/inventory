class Departments::IndexSerializer < ApplicationSerializer
  object_as :department

  attributes(
    :id,
    :name,
    :slug,
    :location_id,
    :notes,
    :created_at,
    :updated_at,
  )

  has_many :items, serializer: ItemSerializer
  has_many :accessories, serializer: AccessorySerializer
  has_many :components, serializer: ComponentSerializer
  has_many :consumables, serializer: ConsumableSerializer
  has_many :licenses, serializer: LicenseSerializer
  has_many :people, serializer: PersonSerializer

  type "{
    items: number
    accessories: number
    consumables: number
    components: number
    licenses: number
    contracts: number
    people: number
  }"
  def counts
    {
      items: department&.items&.size || 0,
      accessories: department&.accessories&.size || 0,
      consumables: department&.consumables&.size || 0,
      components: department&.components&.size || 0,
      licenses: department&.licenses&.size || 0,
      contracts: department&.contracts&.size || 0,
      people: department&.people&.size || 0,
    }
  end
end
