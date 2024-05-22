class Licenses::ShowSerializer < LicenseSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_one :purchase, serializer: PurchaseSerializer

  has_many :assignments, serializer: Assignments::ShowSerializer
  has_many :activities, serializer: ActivitySerializer

  belongs_to :department, serializer: DepartmentSerializer
  belongs_to :category, serializer: CategorySerializer
  belongs_to :vendor, serializer: VendorSerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
end
