class AccessoryBlueprint < ApplicationBlueprint
  fields :name,
         :serial,
         :asset_tag,
         :min_qty,
         :qty,
         :cost_currency,
         :requestable,
         :notes,
         :model_id,
         :vendor_id,
         :default_location_id,
         :created_at,
         :updated_at

  field :cost do |accessory|
    accessory.cost&.amount.to_f if accessory.cost
  end

  view :show do
    field :active_assignments_count do |accessory|
      accessory.assignments.where(active: true).size
    end
  end

  view :associations do
    association :department, blueprint: DepartmentBlueprint
    association :assignments, blueprint: AssignmentBlueprint
    association :purchase, blueprint: PurchaseBlueprint
    association :audits, blueprint: AuditBlueprint
    association :model, blueprint: ModelBlueprint
    association :vendor, blueprint: VendorBlueprint
    association :default_location, blueprint: LocationBlueprint
    association :category, blueprint: CategoryBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
  end
end
