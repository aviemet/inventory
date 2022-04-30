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

  field :cost do |consumable|
    consumable.cost&.amount.to_f if consumable.cost
  end

  view :associations do
		association :purchase, blueprint:  PurchaseBlueprint
		association :audits, blueprint:  AuditBlueprint
		association :model, blueprint:  ModelBlueprint
		association :vendor, blueprint:  VendorBlueprint
		association :default_location, blueprint: LocationBlueprint
		association :category, blueprint:  CategoryBlueprint
		association :manufacturer, blueprint:  ManufacturerBlueprint
  end
end
