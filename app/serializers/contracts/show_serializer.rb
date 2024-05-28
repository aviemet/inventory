class Contracts::ShowSerializer < ContractSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )

  has_many :activities, serializer: ActivitySerializer

  belongs_to :department, serializer: DepartmentSerializer, optional: true
  belongs_to :vendor, serializer: VendorSerializer
end
