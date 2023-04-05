class Accessories::ShowSerializer < Assignable::QuantitySerializer
  object_as :accessory

  attributes :name,
             :serial,
             :asset_tag,
             :min_qty,
             :qty,
             :cost_currency,
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

  association :assignments, serializer: AssignmentSerializer
  association :purchase, serializer: PurchaseSerializer
  association :activities, serializer: ActivitySerializer
  association :default_location, serializer: LocationSerializer
  association :department, serializer: DepartmentSerializer
  association :model, serializer: ModelSerializer
  association :vendor, serializer: VendorSerializer
  association :category, serializer: CategorySerializer
  association :manufacturer, serializer: ManufacturerSerializer
end
