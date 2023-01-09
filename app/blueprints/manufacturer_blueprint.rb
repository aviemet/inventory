class ManufacturerBlueprint < ApplicationBlueprint
  identifier :slug

  fields :id,
         :name,
         :created_at,
         :updated_at

  view :counts do
    field :counts do |manufacturer|
      {
        models: manufacturer&.models&.size || 0,
        items: manufacturer&.items&.size || 0,
        accessories: manufacturer&.accessories&.size || 0,
        consumables: manufacturer&.consumables&.size || 0,
        components: manufacturer&.components&.size || 0,
      }
    end
  end

  view :associations do
		association :contact, blueprint: ContactBlueprint
		association :activities, blueprint: ActivityBlueprint
		association :models, blueprint: ModelBlueprint
		association :items, blueprint: ItemBlueprint
		association :accessories, blueprint: AccessoryBlueprint
		association :consumables, blueprint: ConsumableBlueprint
		association :components, blueprint: ComponentBlueprint
  end

  view :index do
    include_view :counts
  end

  view :show do
    field :items_count do |manufacturer|
      manufacturer.items.size
    end

    field :accessories_count do |manufacturer|
      manufacturer.accessories.size
    end

    field :consumables_count do |manufacturer|
      manufacturer.consumables.size
    end

    field :components_count do |manufacturer|
      manufacturer.components.size
    end

		association :contact, blueprint: ContactBlueprint
  end

  view :as_options do
    only :id, :name
  end
end
