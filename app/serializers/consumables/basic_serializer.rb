class Consumables::BasicSerializer < ConsumableSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_one :company, serializer: CompanySerializer

  belongs_to :category, serializer: CategorySerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
  belongs_to :model, serializer: ModelSerializer
  belongs_to :vendor, serializer: VendorSerializer
end
