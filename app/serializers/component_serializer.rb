class ComponentSerializer < Assignable::QuantitySerializer
  object_as :component

  attributes(
    :id,
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
    :created_at,
    :updated_at,
  )

  type :number
  def cost
    currency_for(component)
  end
end
