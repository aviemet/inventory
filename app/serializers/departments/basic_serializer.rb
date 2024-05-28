class Departments::BasicSerializer < DepartmentSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )

  has_one :company, serializer: CompanySerializer
  has_one :location, serializer: LocationSerializer
end
