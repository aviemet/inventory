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

  field :cost do |component|
    component.cost&.amount.to_f
  end

  view :associations do
    association :owner, blueprint: OwnershipBlueprint
    association :company, blueprint: CompanyBlueprint
    association :department, blueprint: DepartmentBlueprint
    association :assignments, blueprint: AssignmentBlueprint
    association :purchase, blueprint: PurchaseBlueprint
    # association :fieldset_associations, blueprint: FieldAssociationBlueprint
    association :audits, blueprint: AuditBlueprint
    association :model, blueprint: ModelBlueprint
    association :vendor, blueprint: VendorBlueprint
    association :default_location, blueprint: LocationBlueprint
    association :category, blueprint: CategoryBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
  end
end
