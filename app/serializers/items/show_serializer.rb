class Items::ShowSerializer < ItemSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_one :department, serializer: DepartmentSerializer
  has_one :location, serializer: LocationSerializer
  has_one :category, serializer: CategorySerializer

  has_many :nics, serializer: NicSerializer
  has_many :ips, serializer: IpLeases::OptionsSerializer, if: ->{ options[:with_ips] }
  has_many :activities, serializer: ActivitySerializer
  has_many :assignments, serializer: Assignments::ShowSerializer

  has_many :items, serializer: ItemSerializer
  has_many :accessories, serializer: AccessorySerializer
  has_many :components, serializer: ComponentSerializer
  has_many :consumables, serializer: ConsumableSerializer
  has_many :licenses, serializer: LicenseSerializer
  has_many :documentations, serializer: Documentations::IndexSerializer

  belongs_to :model, serializer: ModelSerializer
  belongs_to :vendor, serializer: VendorSerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
  belongs_to :default_location, serializer: LocationSerializer
  belongs_to :status_label, serializer: StatusLabelSerializer
end
