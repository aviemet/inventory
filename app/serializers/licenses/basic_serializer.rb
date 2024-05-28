class Licenses::BasicSerializer < LicenseSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  belongs_to :category, serializer: CategorySerializer
  belongs_to :vendor, serializer: VendorSerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
end
