class Consumables::EditSerializer < Assignable::QuantitySerializer
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
  )

  type :number
  def cost
    currency_for(consumable)
  end

  belongs_to :model, serializer: Models::OptionsSerializer
  belongs_to :vendor, serializer: Vendors::OptionsSerializer
  belongs_to :default_location, serializer: Locations::OptionsSerializer
end
