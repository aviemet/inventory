class ComponentBlueprint < ApplicationBlueprint
  fields :name,
         :serial,
         :min_qty,
         :qty,
         :cost_currency,
         :purchased_at,
         :notes,
         :model_id,
         :vendor_id,
         :default_location_id,
         :created_at,
         :updated_at

  field(:cost) { |component| currency_for(component) }

  field :active_assignments_count do |component|
    component.assignments.where(active: true).size
  end

  view :associations do
    association :department, blueprint: DepartmentBlueprint
    association :assignments, blueprint: AssignmentBlueprint
    association :purchase, blueprint: PurchaseBlueprint
    association :activities, blueprint: ActivityBlueprint
    association :model, blueprint: ModelBlueprint
    association :vendor, blueprint: VendorBlueprint
    association :default_location, blueprint: LocationBlueprint
    association :category, blueprint: CategoryBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
  end

  view :index do
    association :department, blueprint: DepartmentBlueprint
    association :model, blueprint: ModelBlueprint
    association :vendor, blueprint: VendorBlueprint
    association :category, blueprint: CategoryBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
  end

  view :show do
    association :department, blueprint: DepartmentBlueprint
    association :assignments, blueprint: AssignmentBlueprint
    association :purchase, blueprint: PurchaseBlueprint
    association :activities, blueprint: ActivityBlueprint
    association :model, blueprint: ModelBlueprint
    association :vendor, blueprint: VendorBlueprint
    association :default_location, blueprint: LocationBlueprint
    association :category, blueprint: CategoryBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
  end
end
