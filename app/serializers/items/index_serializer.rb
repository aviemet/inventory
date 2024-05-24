class Items::IndexSerializer < ItemSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_one :department, serializer: Departments::OptionsSerializer
  has_one :location, serializer: Locations::OptionsSerializer

  has_many :ips, serializer: IpLeases::OptionsSerializer, if: ->{ options[:with_ips] }

  belongs_to :model, serializer: Models::OptionsSerializer
  belongs_to :vendor, serializer: Vendors::OptionsSerializer
  belongs_to :category, serializer: Categories::OptionsSerializer
  belongs_to :manufacturer, serializer: Manufacturers::OptionsSerializer
  belongs_to :status_label, serializer: StatusLabels::OptionsSerializer
end
