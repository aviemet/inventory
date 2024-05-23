class Locations::IndexSerializer < Locations::CountsSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )

  belongs_to :parent, serializer: Locations::BasicSerializer
  belongs_to :contact, serializer: Contacts::BasicSerializer
  belongs_to :department, serializer: Departments::BasicSerializer
  belongs_to :location, serializer: Locations::BasicSerializer
end
