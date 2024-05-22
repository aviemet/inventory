class Accessories::ShowSerializer < AccessorySerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_one :company, serializer: CompanySerializer
  has_one :purchase, serializer: PurchaseSerializer

  has_many :activities, serializer: ActivitySerializer
  has_many :assignments, serializer: Assignments::ShowSerializer
  has_many :documentations, serializer: Documentations::IndexSerializer

  belongs_to :category, serializer: CategorySerializer
  belongs_to :default_location, serializer: LocationSerializer
  belongs_to :department, serializer: DepartmentSerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
  belongs_to :model, serializer: ModelSerializer
  belongs_to :status_label, serializer: StatusLabelSerializer
  belongs_to :vendor, serializer: VendorSerializer
end
