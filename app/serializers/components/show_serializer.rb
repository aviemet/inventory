class Components::ShowSerializer < ComponentSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_one :purchase, serializer: PurchaseSerializer

  has_many :assignments, serializer: Assignments::ShowSerializer
  has_many :activities, serializer: Activities::BasicSerializer
  has_many :documentations, serializer: Documentations::IndexSerializer

  belongs_to :default_location, serializer: Locations::BasicSerializer
  belongs_to :department, serializer: Departments::BasicSerializer
  belongs_to :model, serializer: Models::BasicSerializer
  belongs_to :vendor, serializer: Vendors::BasicSerializer
  belongs_to :category, serializer: Categories::BasicSerializer
  belongs_to :manufacturer, serializer: Manufacturers::BasicSerializer
end
