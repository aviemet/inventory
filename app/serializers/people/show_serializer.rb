class People::ShowSerializer < PersonSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_one :contact, serializer: ContactSerializer

  has_many :possessions, serializer: AssignmentSerializer
  has_many :items, serializer: ItemSerializer
  has_many :accessories, serializer: AccessorySerializer
  has_many :licenses, serializer: LicenseSerializer
  has_many :activities, serializer: ActivitySerializer

  belongs_to :manager, serializer: PersonSerializer
  belongs_to :user, serializer: UserSerializer
  belongs_to :department, serializer: DepartmentSerializer
end
