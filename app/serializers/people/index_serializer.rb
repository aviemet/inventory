class People::IndexSerializer < PersonSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_one :contact, serializer: Contacts::BasicSerializer

  has_many :groups, serializer: PersonGroups::BasicSerializer
  has_many :possessions, serializer: Assignments::BasicSerializer
  has_many :items, serializer: Items::BasicSerializer
  has_many :accessories, serializer: Accessories::BasicSerializer
  has_many :licenses, serializer: Licenses::BasicSerializer

  belongs_to :manager, serializer: People::BasicSerializer
  belongs_to :user, serializer: Users::BasicSerializer
  belongs_to :department, serializer: Departments::BasicSerializer
end
