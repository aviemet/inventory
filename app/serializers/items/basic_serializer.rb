class Items::BasicSerializer < ItemSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_one :company, serializer: CompanySerializer
  has_one :category, serializer: CategorySerializer

  belongs_to :model, serializer: ModelSerializer
  belongs_to :vendor, serializer: VendorSerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
  belongs_to :status_label, serializer: StatusLabelSerializer
end
