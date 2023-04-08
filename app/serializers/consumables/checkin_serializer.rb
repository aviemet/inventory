class Consumables::CheckinSerializer < Assignable::QuantitySerializer
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
     :created_at,
     :updated_at,
   )

  type :number
  def cost
    currency_for(consumable)
  end
end
