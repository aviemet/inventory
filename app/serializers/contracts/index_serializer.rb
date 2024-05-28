class Contracts::IndexSerializer < ContractSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )

  belongs_to :department, serializer: DepartmentSerializer
  belongs_to :vendor, serializer: VendorSerializer
end
