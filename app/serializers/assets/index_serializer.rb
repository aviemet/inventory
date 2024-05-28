class Assets::IndexSerializer < AssetSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  belongs_to :department, serializer: DepartmentSerializer
  has_many :assignments, serializer: AssignmentSerializer
  belongs_to :model, serializer: ModelSerializer
  belongs_to :vendor, serializer: VendorSerializer
  belongs_to :category, serializer: CategorySerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
  belongs_to :location, serializer: LocationSerializer
  belongs_to :status_label, serializer: StatusLabelSerializer
end
