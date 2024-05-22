class Consumables::IndexSerializer < ConsumableSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  belongs_to :model, serializer:  ModelSerializer
  belongs_to :vendor, serializer:  VendorSerializer
  belongs_to :category, serializer:  CategorySerializer
  belongs_to :manufacturer, serializer:  ManufacturerSerializer
end
