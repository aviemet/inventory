class ItemSerializer < Assignable::SingleSerializer
  object_as :ip_lease

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
    currency_for(component)
  end

  attribute :assigned do
    item.assigned?
  end

  association :department, serializer: DepartmentSerializer
  association :assignments, serializer: AssignmentSerializer, view: :associations
  association :model, serializer: ModelSerializer
  association :vendor, serializer: VendorSerializer
  association :category, serializer: CategorySerializer
  association :manufacturer, serializer: ManufacturerSerializer
  association :default_location, serializer: LocationSerializer
  association :location, serializer: LocationSerializer
  association :status_label, serializer: StatusLabelSerializer
  association :nics, serializer: NicSerializer
  association :history, name: :activities, serializer: ActivitySerializer

  association :items, serializer: ItemSerializer
  association :accessories, serializer: AccessorySerializer
  association :components, serializer: ComponentSerializer
  association :consumables, serializer: ConsumableSerializer
  association :licenses, serializer: LicenseSerializer

end
