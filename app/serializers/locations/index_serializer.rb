class Locations::IndexSerializer < ApplicationSerializer
  object_as :location

  identifier :slug

  attributes(
     :name,
     :parent_id,
     :currency,
     :created_at,
     :updated_at,
   )

  attribute :counts do
    {
      items: location.items.size || 0,
      accessories: location.accessories.size || 0,
      consumables: location.consumables.size || 0,
      components: location.components.size || 0,
      licenses: location.licenses.size || 0,
      people: location.people.size || 0,
    }
  end

  belongs_to :parent, serializer: LocationSerializer
  belongs_to :contact, serializer: ContactSerializer
  belongs_to :department, serializer: DepartmentSerializer
  belongs_to :location, serializer: LocationSerializer
end
