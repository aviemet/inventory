class Accessories::NewSerializer < Assignable::QuantitySerializer
  object_as :accessory

  attributes(
    :name,
    :serial,
    :asset_tag,
    :min_qty,
    :qty,
    :cost,
    :cost_currency,
    :requestable,
    :notes,
    :model_id,
    :vendor_id,
    :default_location_id,
  )

end
