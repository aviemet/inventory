class Licenses::IndexSerializer < LicenseSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  belongs_to :department, serializer: DepartmentSerializer
  belongs_to :category, serializer: CategorySerializer
  belongs_to :vendor, serializer: VendorSerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
end
