class Consumables::ShowSerializer < Assignable::QuantitySerializer
  object_as :consumable

  attributes :name,
             :min_qty,
             :qty,
             :cost,
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

  association :purchase, serializer:  PurchaseSerializer
  association :assignments, serializer: AssignmentSerializer
  association :model, serializer:  ModelSerializer
  association :vendor, serializer:  VendorSerializer
  association :default_location, serializer: LocationSerializer
  association :category, serializer:  CategorySerializer
  association :manufacturer, serializer:  ManufacturerSerializer

end
