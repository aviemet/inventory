class Manufacturers::ShowSerializer < ApplicationSerializer
  object_as :manufacturer

  identifier :slug

  attributes :id,
             :name,
             :created_at,
             :updated_at

  attribute :items_count do
    manufacturer.items.size
  end

  attribute :accessories_count do
    manufacturer.accessories.size
  end

  attribute :consumables_count do
    manufacturer.consumables.size
  end

  attribute :components_count do
    manufacturer.components.size
  end

  has_one :contact, serializer: ContactSerializer
end
