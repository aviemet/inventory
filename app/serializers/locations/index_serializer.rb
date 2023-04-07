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

  attribute :counts do |loc|
    {
      items: loc&.items&.size || 0,
      accessories: loc&.accessories&.size || 0,
      consumables: loc&.consumables&.size || 0,
      components: loc&.components&.size || 0,
      licenses: loc&.licenses&.size || 0,
      people: loc&.people&.size || 0,
    }
  end

  belongs_to :parent, serializer: LocationSerializer
  belongs_to :contact, serializer: ContactSerializer
  belongs_to :department, serializer: DepartmentSerializer
  belongs_to :location, serializer: LocationSerializer
end
