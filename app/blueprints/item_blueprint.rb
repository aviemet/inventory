class ItemBlueprint < Blueprinter::Base
  identifier :id

  fields :id,
         :name,
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
    item.cost.amount.to_f
  end

  view :associations do
    association :owner, blueprint: OwnerBlueprint
    # association :company, blueprint: CompanyBlueprint
    association :department, blueprint: DepartmentBlueprint
    association :assignments, blueprint: AssignmentBlueprint
    # association :posessions, blueprint: AssignmentBlueprint
    association :items, blueprint: ItemBlueprint
    association :accessories, blueprint: AccessoryBlueprint
    association :licenses, blueprint: LicenseBlueprint
    association :purchase, blueprint: PurchaseBlueprint
    # association :fieldset_associations, blueprint: FieldAssociationBlueprint
    association :roles, blueprint: RoleBlueprint
    association :audits, blueprint: AuditBlueprint
    association :nics, blueprint: NicBlueprint
    association :ips, blueprint: IpBlueprint
    association :ip_leases, blueprint: IpLeaseBlueprint
    association :model, blueprint: ModelBlueprint
    association :vendor, blueprint: VendorBlueprint
    association :default_location, blueprint: LocationBlueprint
    association :category, blueprint: CategoryBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
    association :warranty, blueprint: WarrantyBlueprint
  end

end
