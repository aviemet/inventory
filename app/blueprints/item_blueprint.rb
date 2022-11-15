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
    association :assignments, blueprint: AssignmentBlueprint, view: :associations
    association :model, blueprint: ModelBlueprint
    association :vendor, blueprint: VendorBlueprint
    association :category, blueprint: CategoryBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
    association :default_location, blueprint: LocationBlueprint
    association :location, blueprint: LocationBlueprint
    association :status_label, blueprint: StatusLabelBlueprint
    association :nics, blueprint: NicBlueprint

    association :activities, blueprint: ActivityBlueprint
  end

  view :index do
    association :department, blueprint: DepartmentBlueprint
    association :model, blueprint: ModelBlueprint
    association :vendor, blueprint: VendorBlueprint
    association :category, blueprint: CategoryBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
    association :location, blueprint: LocationBlueprint
    association :status_label, blueprint: StatusLabelBlueprint
  end

  view :show do
    association :department, blueprint: DepartmentBlueprint
    association :assignments, blueprint: AssignmentBlueprint, view: :associations
    association :model, blueprint: ModelBlueprint
    association :vendor, blueprint: VendorBlueprint
    association :category, blueprint: CategoryBlueprint
    association :manufacturer, blueprint: ManufacturerBlueprint
    association :default_location, blueprint: LocationBlueprint
    association :location, blueprint: LocationBlueprint
    association :status_label, blueprint: StatusLabelBlueprint
    association :nics, blueprint: NicBlueprint

    association :history, name: :activities, blueprint: ActivityBlueprint
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

  view :as_options_with_ip do
    include_view :as_options

    association :ips, blueprint: IpLeaseBlueprint, view: :as_options
  end
end
