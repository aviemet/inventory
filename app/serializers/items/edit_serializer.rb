class Items::EditSerializer < Assignable::SingleSerializer
  object_as :item

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
    currency_for(item)
  end

  attribute :assigned do
    item.assigned?
  end
end
