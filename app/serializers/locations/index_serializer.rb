class Locations::IndexSerializer < Locations::CountsSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  belongs_to :parent, serializer: LocationSerializer
  belongs_to :contact, serializer: ContactSerializer
  belongs_to :department, serializer: DepartmentSerializer
  belongs_to :location, serializer: LocationSerializer
end
