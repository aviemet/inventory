class Departments::ShowSerializer < Departments::CountsSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )

  has_one :location, serializer: LocationSerializer

  has_many :items, serializer: ItemSerializer
  has_many :accessories, serializer: AccessorySerializer
  has_many :components, serializer: ComponentSerializer
  has_many :consumables, serializer: ConsumableSerializer
  has_many :licenses, serializer: LicenseSerializer
  has_many :people, serializer: PersonSerializer
  has_many :activities, serializer: ActivitySerializer

end
