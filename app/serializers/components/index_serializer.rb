class Components::IndexSerializer < Assignable::QuantitySerializer
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
    :created_at,
    :updated_at,
  )

  type :number
  def cost
    currency_for(component)
  end

  belongs_to :department, serializer: DepartmentSerializer
  belongs_to :model, serializer: ModelSerializer
  belongs_to :vendor, serializer: VendorSerializer
  belongs_to :category, serializer: CategorySerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
end
