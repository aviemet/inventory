class Components::FormDataSerializer < Assignable::QuantitySerializer
  object_as :component

  attributes(
    :name,
    :serial,
    :asset_tag,
    :min_qty,
    :qty,
    :cost_currency,
    :purchased_at,
    :notes,
    :model_id,
    :vendor_id,
    :default_location_id,
  )

  type :number
  def cost
    currency_for(component)
  end

  belongs_to :model, serializer: Models::OptionsSerializer
  belongs_to :vendor, serializer: Vendors::OptionsSerializer
  belongs_to :default_location, serializer: Locations::OptionsSerializer
end
