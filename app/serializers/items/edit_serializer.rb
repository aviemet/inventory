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

  type :number
  def department_id
    item.department&.id
  end

  belongs_to :model, serializer: Models::OptionsSerializer
  belongs_to :vendor, serializer: Vendors::OptionsSerializer
  belongs_to :default_location, serializer: Locations::OptionsSerializer
  has_one :department, serializer: Departments::OptionsSerializer
end
