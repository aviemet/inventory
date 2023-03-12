class LicenseBlueprint < Assignable::QuantityBlueprint
  fields :name,
         :qty,
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
    license.cost&.amount.to_f if license.cost
  end

  view :associations do
    association :department, blueprint: DepartmentBlueprint
    association :assignments, blueprint: AssignmentBlueprint
    association :purchase, blueprint: PurchaseBlueprint
    association :activities, blueprint: ActivityBlueprint
    association :category, blueprint: CategoryBlueprint
    association :vendor, blueprint: VendorBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
  end

  view :index do
    association :department, blueprint: DepartmentBlueprint
    association :category, blueprint: CategoryBlueprint
    association :vendor, blueprint: VendorBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
  end

  view :show do
    include_view :associations

    association :assignments, blueprint: AssignmentBlueprint, view: :associations
  end

end
