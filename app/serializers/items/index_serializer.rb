class Items::IndexSerializer < Assignable::SingleSerializer
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
  association :model, serializer: ModelSerializer
  association :vendor, serializer: VendorSerializer
  association :category, serializer: CategorySerializer
  association :manufacturer, serializer: ManufacturerSerializer
  association :location, serializer: LocationSerializer
  association :status_label, serializer: StatusLabelSerializer
end
