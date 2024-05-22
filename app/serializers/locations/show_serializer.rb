class Locations::ShowSerializer < Locations::CountsSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )

  has_many :activities, serializer: ActivitySerializer

  belongs_to :parent, serializer: LocationSerializer
  belongs_to :contact, serializer: ContactSerializer
  belongs_to :department, serializer: DepartmentSerializer
end
