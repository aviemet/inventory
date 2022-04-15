class ItemBlueprint < Blueprinter::Base
  identifier :id

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
    item.cost&.amount.to_f
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

  view :new do
    exclude :id
    exclude :updated_at
    exclude :created_at
  end

  view :associations do
    # association :owner, blueprint: OwnershipBlueprint
    # association :company, blueprint: CompanyBlueprint
    association :department, blueprint: DepartmentBlueprint
    association :assignments, blueprint: AssignmentBlueprint
    # association :posessions, blueprint: AssignmentBlueprint
    # association :items, blueprint: ItemBlueprint
    # association :accessories, blueprint: AccessoryBlueprint
    # association :licenses, blueprint: LicenseBlueprint
    # association :purchase, blueprint: PurchaseBlueprint
    # association :fieldset_associations, blueprint: FieldAssociationBlueprint
    # association :roles, blueprint: RoleBlueprint
    # association :audits, blueprint: AuditBlueprint
    # association :nics, blueprint: NicBlueprint
    # association :ips, blueprint: IpBlueprint
    # association :ip_leases, blueprint: IpLeaseBlueprint
    association :model, blueprint: ModelBlueprint
    association :vendor, blueprint: VendorBlueprint
    # association :default_location, blueprint: LocationBlueprint
    association :category, blueprint: CategoryBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
    # association :warranty, blueprint: WarrantyBlueprint
  end

end
