class Consumables::IndexSerializer < Assignable::QuantitySerializer
  object_as :consumable

  attributes(
    :id,
    :name,
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
    :updated_at,
  )

  type :number
  def cost
    currency_for(consumable)
  end

  belongs_to :model, serializer:  ModelSerializer
  belongs_to :vendor, serializer:  VendorSerializer
  belongs_to :category, serializer:  CategorySerializer
  belongs_to :manufacturer, serializer:  ManufacturerSerializer
end
