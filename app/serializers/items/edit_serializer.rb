class Items::EditSerializer < Assignable::SingleSerializer
  object_as :item

  attributes(
    :id,
    :name,
    :asset_tag,
    :serial,
    :cost_currency,
    :purchased_at,
    :requestable,
    :notes,
    :model_id,
    :vendor_id,
    :default_location_id,
  )

  type :number
  def cost
    currency_for(item)
  end

  type :boolean
  def assigned
    item.assigned?
  end

  belongs_to :model, serializer: ModelSerializer
end
