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

  has_one :purchase, serializer:  PurchaseSerializer
  has_many :assignments, serializer: AssignmentSerializer
  belongs_to :default_location, serializer: LocationSerializer

  belongs_to :model, serializer:  ModelSerializer
  belongs_to :vendor, serializer:  VendorSerializer
  belongs_to :category, serializer:  CategorySerializer
  belongs_to :manufacturer, serializer:  ManufacturerSerializer
end
