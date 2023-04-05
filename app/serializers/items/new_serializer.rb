class ItemSerializer < Assignable::SingleSerializer
  object_as :ip_lease

  attributes :name,
             :asset_tag,
             :serial,
             :cost_currency,
             :purchased_at,
             :requestable,
             :notes,
             :model_id,
             :vendor_id,
             :default_location_id

  attribute :cost do
    currency_for(component)
  end

end
