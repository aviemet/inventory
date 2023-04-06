class ItemSerializer < Assignable::SingleSerializer
  object_as :item

  attributes :name,
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

  attribute :cost do
    currency_for(item)
  end

  attribute :assigned do
    item.assigned?
  end

  # view :associations do
  #   association :department, serializer: DepartmentSerializer
  #   association :assignments, serializer: AssignmentSerializer, view: :associations
  #   association :model, serializer: ModelSerializer
  #   association :vendor, serializer: VendorSerializer
  #   association :category, serializer: CategorySerializer
  #   association :manufacturer, serializer: ManufacturerSerializer
  #   association :default_location, serializer: LocationSerializer
  #   association :location, serializer: LocationSerializer
  #   association :status_label, serializer: StatusLabelSerializer
  #   association :nics, serializer: NicSerializer
  #   association :history, name: :activities, serializer: ActivitySerializer
  # end

  # view :index do
  #   include_view :associations

  #   excludes :assignments, :default_location, :nics, :activities
  # end

  # view :show do
  #   include_view :associations

  #   association :items, serializer: ItemSerializer
  #   association :accessories, serializer: AccessorySerializer
  #   association :components, serializer: ComponentSerializer
  #   association :consumables, serializer: ConsumableSerializer
  #   association :licenses, serializer: LicenseSerializer
  # end

  # view :new do
  #   include_view :new

  #   exclude :assigned
  # end

  # view :shallow do
  #   only :name, :asset_tag
  # end

  # view :as_options do
  #   only :id, :name, :default_location_id
  # end

  # view :as_options_with_ip do
  #   include_view :as_options

  #   association :ips, serializer: IpLeaseSerializer, view: :as_options
  # end
end
