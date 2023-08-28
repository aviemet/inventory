class Accessories::EditSerializer < Assignable::QuantitySerializer
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

  type :number
  def cost
    currency_for(accessory)
  end

  belongs_to :model, serializer: Models::OptionsSerializer
  belongs_to :vendor, serializer: Vendors::OptionsSerializer
  belongs_to :default_location, serializer: Locations::OptionsSerializer
end
