class AccessorySerializer < Assignable::QuantitySerializer
  attributes :name,
             :serial,
             :asset_tag,
             :min_qty,
             :qty,
             :cost_currency,
             :requestable,
             :notes,
             :model_id,
             :vendor_id,
             :default_location_id,
             :created_at,
             :updated_at

  attribute
  def cost
    currency_for(accessory)
  end

  # view :index do
  #   association :department, serializer: DepartmentSerializer
  #   association :model, serializer: ModelSerializer
  #   association :vendor, serializer: VendorSerializer
  #   association :category, serializer: CategorySerializer
  #   association :manufacturer, serializer: ManufacturerSerializer
  # end

  # view :show do
  #   include_view :associations
  # end

end
