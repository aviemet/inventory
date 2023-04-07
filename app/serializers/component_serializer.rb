class ComponentSerializer < Assignable::QuantitySerializer
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
    :created_at,
    :updated_at,
  )

  attribute :cost do
    currency_for(component)
  end
end
