class ContractBlueprint < ApplicationBlueprint
  fields :name,
         :number,
         :notes,
         :begins_at,
         :ends_at,
         :vendor_id,
         :category_id,
         :created_at,
         :updated_at

  view :associations do
    association :department, blueprint: DepartmentBlueprint
    association :audits, blueprint: AuditBlueprint
    association :category, blueprint: CategoryBlueprint
    association :vendor, blueprint: VendorBlueprint
  end
end
