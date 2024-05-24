class Items::ShowSerializer < ItemSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_one :department, serializer: Departments::BasicSerializer
  has_one :location, serializer: Locations::BasicSerializer
  has_one :category, serializer: Categories::BasicSerializer

  has_many :nics, serializer: Nics::BasicSerializer
  has_many :ips, serializer: IpLeases::OptionsSerializer, if: ->{ options[:with_ips] }
  has_many :activities, serializer: Activities::BasicSerializer
  has_many :assignments, serializer: Assignments::ShowSerializer

  has_many :items, serializer: Items::BasicSerializer
  has_many :accessories, serializer: Accessories::BasicSerializer
  has_many :components, serializer: Components::BasicSerializer
  has_many :consumables, serializer: Consumables::BasicSerializer
  has_many :licenses, serializer: Licenses::BasicSerializer
  has_many :documentations, serializer: Documentations::IndexSerializer

  belongs_to :model, serializer: Models::BasicSerializer
  belongs_to :vendor, serializer: Vendors::BasicSerializer
  belongs_to :manufacturer, serializer: Manufacturers::BasicSerializer
  belongs_to :default_location, serializer: Locations::BasicSerializer
  belongs_to :status_label, serializer: StatusLabels::BasicSerializer
end
