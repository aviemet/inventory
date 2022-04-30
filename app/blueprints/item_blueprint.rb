class ItemBlueprint < ApplicationBlueprint
  fields :name,
         :asset_tag,
         :serial,
         :cost_currency,
         :purchased_at,
         :requestable,
         :notes,
         :model_id,
         :vendor_id,
         :default_location_id,
         :created_at,
         :updated_at

  field :cost do |item|
    item.cost&.amount.to_f if item.cost
  end

  view :shallow do
    exclude :serial
    exclude :cost_currency
    exclude :cost
    exclude :purchased_at
    exclude :requestable
    exclude :notes
    exclude :model_id
    exclude :vendor_id
    exclude :default_location_id
    exclude :created_at
    exclude :updated_at
  end

  view :associations do
    association :department, blueprint: DepartmentBlueprint
    association :assignments, blueprint: AssignmentBlueprint
    association :audits, blueprint: AuditBlueprint
    association :model, blueprint: ModelBlueprint
    association :vendor, blueprint: VendorBlueprint
    association :category, blueprint: CategoryBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
  end

  view :as_options do
    fields :id, :name
  end

end
