class ConsumableBlueprint < ApplicationBlueprint
  fields :name,
         :min_qty,
         :qty,
         :cost,
         :cost_currency,
         :requestable,
         :notes,
         :model_id,
         :vendor_id,
         :default_location_id,
         :created_at,
         :updated_at

  field(:cost) { |consumable| currency_for(consumable) }

  view :associations do
    association :purchase, blueprint:  PurchaseBlueprint
    association :activities, blueprint: ActivityBlueprint
    association :model, blueprint:  ModelBlueprint
    association :vendor, blueprint:  VendorBlueprint
    association :default_location, blueprint: LocationBlueprint
    association :category, blueprint:  CategoryBlueprint
    association :manufacturer, blueprint:  ManufacturerBlueprint
  end

  view :index do
    association :model, blueprint:  ModelBlueprint
    association :vendor, blueprint:  VendorBlueprint
    association :category, blueprint:  CategoryBlueprint
    association :manufacturer, blueprint:  ManufacturerBlueprint
  end

  view :show do
    association :purchase, blueprint:  PurchaseBlueprint
    association :assignments, blueprint: AssignmentBlueprint, view: :associations
    association :model, blueprint:  ModelBlueprint
    association :vendor, blueprint:  VendorBlueprint
    association :default_location, blueprint: LocationBlueprint
    association :category, blueprint:  CategoryBlueprint
    association :manufacturer, blueprint:  ManufacturerBlueprint
  end

end
