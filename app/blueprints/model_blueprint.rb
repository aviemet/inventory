class ModelBlueprint < ApplicationBlueprint
  fields :name,
         :slug,
         :model_number,
         :notes,
         :category_id,
         :manufacturer_id,
         :created_at,
         :updated_at

  view :associations do
    association :activities, blueprint: ActivityBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
    association :category, blueprint: CategoryBlueprint
    association :items, blueprint: ItemBlueprint
    association :accessories, blueprint: AccessoryBlueprint
    association :consumables, blueprint: ConsumableBlueprint
    association :components, blueprint: ComponentBlueprint
  end

  view :index do
    field :count do |model|
      model.types.size
    end

    association :manufacturer, blueprint: ManufacturerBlueprint
    association :category, blueprint: CategoryBlueprint
  end

  view :show do
    association :activities, blueprint: ActivityBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
    association :category, blueprint: CategoryBlueprint
    association :items, blueprint: ItemBlueprint
    association :accessories, blueprint: AccessoryBlueprint
    association :consumables, blueprint: ConsumableBlueprint
    association :components, blueprint: ComponentBlueprint
  end

  view :options do
    only :id, :name
  end
end
