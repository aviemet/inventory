class Departments::ShowSerializer < ApplicationSerializer
  object_as :department

  attributes :name,
             :slug,
             :location_id,
             :notes,
             :created_at,
             :updated_at

  association :activities, serializer: ActivitySerializer
  association :items, serializer: ItemSerializer
  association :accessories, serializer: AccessorySerializer
  association :components, serializer: ComponentSerializer
  association :consumables, serializer: ConsumableSerializer
  association :licenses, serializer: LicenseSerializer
  association :people, serializer: PersonSerializer
  association :location, serializer: LocationSerializer

  attribute :counts do
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
