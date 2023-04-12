class Items::FormDataSerializer < Assignable::SingleSerializer
  object_as :item

  attributes(
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

end
