class Items::IndexSerializer < Assignable::SingleSerializer
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
    # :created_at,
    :updated_at,
  )

  type :number
  def cost
    currency_for(item)
  end

  type :boolean
  def assigned
    item.assigned?
  end

  belongs_to :department, serializer: DepartmentSerializer
  belongs_to :model, serializer: ModelSerializer
  belongs_to :vendor, serializer: VendorSerializer
  belongs_to :category, serializer: CategorySerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
  has_one :location, serializer: LocationSerializer
  belongs_to :status_label, serializer: StatusLabelSerializer
end
