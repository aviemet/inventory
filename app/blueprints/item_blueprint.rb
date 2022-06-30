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

  field(:cost) { |item| currency_for(item) }
  field(:assigned) { |item| item.assigned? }

  view :associations do
    association :department, blueprint: DepartmentBlueprint
    association :assignments, blueprint: AssignmentBlueprint
    association :audits, blueprint: AuditBlueprint
    association :model, blueprint: ModelBlueprint
    association :vendor, blueprint: VendorBlueprint
    association :category, blueprint: CategoryBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
    association :default_location, blueprint: LocationBlueprint
    association :location, blueprint: LocationBlueprint
  end

  view :new do
    include_view :new

    exclude :assigned
  end

  view :shallow do
    only :name, :asset_tag
  end
  
  view :as_options do
    only :id, :name, :default_location_id
  end
end
