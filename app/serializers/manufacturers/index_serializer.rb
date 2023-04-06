class Manufacturers::IndexSerializer < ApplicationSerializer
  object_as :manufacturer

  identifier :slug

  attributes(
     :id,
     :name,
     :created_at,
     :updated_at,
   )

  attribute :counts do
    {
      models: manufacturer&.models&.size || 0,
      items: manufacturer&.items&.size || 0,
      accessories: manufacturer&.accessories&.size || 0,
      consumables: manufacturer&.consumables&.size || 0,
      components: manufacturer&.components&.size || 0,
    }
  end
end
