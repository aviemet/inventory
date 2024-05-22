class Items::ShowSerializer < Assignable::SingleSerializer
  object_as :item

  attributes(
    :id,
    :name,
    :asset_tag,
    :serial,
    :cost_currency,
    :purchased_at,
    :requestable,
    :notes,
    :model_id,
    :vendor_id,
    :default_location_id,
    :created_at,
    :updated_at,
  )

  type :number
  def cost
    currency_for(item)
  end

  type :boolean
  def assigned
    item.assigned?
  end

  has_one :department, serializer: DepartmentSerializer
  belongs_to :model, serializer: ModelSerializer
  belongs_to :vendor, serializer: VendorSerializer
  has_one :category, serializer: CategorySerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
  has_one :location, serializer: LocationSerializer
  belongs_to :status_label, serializer: StatusLabelSerializer

  has_many :assignments, serializer: Assignments::ShowSerializer
  belongs_to :default_location, serializer: LocationSerializer
  has_many :nics, serializer: NicSerializer
  has_many :activities, serializer: ActivitySerializer

  has_many :items, serializer: ItemSerializer
  has_many :accessories, serializer: AccessorySerializer
  has_many :components, serializer: ComponentSerializer
  has_many :consumables, serializer: ConsumableSerializer
  has_many :licenses, serializer: LicenseSerializer
  has_many :documentations, serializer: Documentations::IndexSerializer

end
