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
		association :activity, blueprint: ActivityBlueprint
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
		association :contact, blueprint: ContactBlueprint
		association :activity, blueprint: ActivityBlueprint
		association :models, blueprint: ModelBlueprint
		association :items, blueprint: ItemBlueprint
		association :accessories, blueprint: AccessoryBlueprint
		association :consumables, blueprint: ConsumableBlueprint
		association :components, blueprint: ComponentBlueprint
  end

  view :as_options do
    only :id, :name
  end
end
