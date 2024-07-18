class People::ShowSerializer < PersonSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_one :contact, serializer: Contacts::BasicSerializer

  has_many :possessions, serializer: Assignments::BasicSerializer
  has_many :activities, serializer: Activities::BasicSerializer

  belongs_to :manager, serializer: People::BasicSerializer
  belongs_to :user, serializer: Users::BasicSerializer
  belongs_to :department, serializer: Departments::BasicSerializer
  belongs_to :location, serializer: Locations::BasicSerializer
end
