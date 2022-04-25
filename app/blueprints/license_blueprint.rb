class LicenseBlueprint < ApplicationBlueprint
  fields :id,
         :name,
         :seats,
         :key,
         :licenser_name,
         :licenser_email,
         :reassignable,
         :cost,
         :cost_currency,
         :purchased_at,
         :expires_at,
         :terminates_at,
         :maintained,
         :notes,
         :category_id,
         :vendor_id,
         :manufacturer_id,
         :created_at,
         :updated_at

  field :cost do |license|
    license.cost&.amount.to_f
  end

  view :associations do
		# association :owner, blueprint: OwnershipBlueprint
		# association :company, blueprint: CompanyBlueprint
		association :department, blueprint: DepartmentBlueprint
		association :assignments, blueprint: AssignmentBlueprint
		# association :purchase, blueprint: PurchaseBlueprint
		# association :fieldset_associations, blueprint: FieldsetBlueprint
		# association :roles, blueprint: RoleBlueprint
		# association :audits, blueprint: AuditBlueprint
		association :category, blueprint: CategoryBlueprint
		association :vendor, blueprint: VendorBlueprint
		association :manufacturer, blueprint: ManufacturerBlueprint
  end
      
end
