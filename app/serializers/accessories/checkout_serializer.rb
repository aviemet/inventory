class Accessories::CheckoutSerializer < Assignable::QuantitySerializer
  object_as :accessory

  attributes(
    :id,
    :name,
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
  )

  attribute :cost do
    currency_for(accessory)
  end
end
