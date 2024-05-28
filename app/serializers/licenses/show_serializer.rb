class Licenses::ShowSerializer < LicenseSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_one :purchase, serializer: Purchases::BasicSerializer

  has_many :assignments, serializer: Assignments::ShowSerializer
  has_many :activities, serializer: Activities::BasicSerializer

  belongs_to :department, serializer: Departments::BasicSerializer
  belongs_to :category, serializer: Categories::BasicSerializer
  belongs_to :vendor, serializer: Vendors::BasicSerializer
  belongs_to :manufacturer, serializer: Manufacturers::BasicSerializer
end
