class Items::IndexSerializer < ItemSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_one :department, serializer: Departments::OptionsSerializer
  has_one :location, serializer: LocationSerializer

  has_many :ips, serializer: IpLeases::OptionsSerializer, if: ->{ options[:with_ips] }

  belongs_to :model, serializer: ModelSerializer
  belongs_to :vendor, serializer: VendorSerializer
  belongs_to :category, serializer: CategorySerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
  belongs_to :status_label, serializer: StatusLabelSerializer
end
