class AssetBlueprint < ApplicationBlueprint
  fields :name,
         :asset_tag,
         :serial,
         :cost_currency,
         :purchased_at,
         :requestable,
         :qty,
         :min_qty,
         :notes,
         :model_id,
         :vendor_id,
         :default_location_id,
         :type,
         :created_at,
         :updated_at

  field(:cost) { |asset| currency_for(asset) }
  field(:available_to_checkout) { |asset| asset.available_to_checkout? }

  view :associations do
    association :department, blueprint: DepartmentBlueprint
    association :assignments, blueprint: AssignmentBlueprint, view: :associations
    association :model, blueprint: ModelBlueprint
    association :vendor, blueprint: VendorBlueprint
    association :category, blueprint: CategoryBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
    association :default_location, blueprint: LocationBlueprint
    association :location, blueprint: LocationBlueprint
    association :status_label, blueprint: StatusLabelBlueprint

    association :activities, blueprint: ActivityBlueprint
  end

  view :index do
    association :department, blueprint: DepartmentBlueprint
    association :assignments, blueprint: AssignmentBlueprint, view: :associations
    association :model, blueprint: ModelBlueprint
    association :vendor, blueprint: VendorBlueprint
    association :category, blueprint: CategoryBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
    association :location, blueprint: LocationBlueprint
    association :status_label, blueprint: StatusLabelBlueprint
  end

  view :show do
    include_view :associations

    association :history, name: :activities, blueprint: ActivityBlueprint
  end

  view :new do
    include_view :new

    exclude :assigned
  end

  view :shallow do
    only :name, :asset_tag
  end

  view :options do
    only :id, :name, :default_location_id
  end
end
