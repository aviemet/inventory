class Consumables::NewSerializer < Assignable::QuantitySerializer
  object_as :consumable

  attributes(
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
   )

  attribute :cost do
    currency_for(consumable)
  end
end
