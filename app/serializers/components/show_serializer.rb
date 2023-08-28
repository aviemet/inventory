class Components::ShowSerializer < Assignable::QuantitySerializer
  object_as :component

  attributes(
    :id,
    :name,
    :serial,
    :asset_tag,
    :min_qty,
    :qty,
    :cost_currency,
    :purchased_at,
    :notes,
    :model_id,
    :vendor_id,
    :default_location_id,
    :created_at,
    :updated_at,
  )

  type :number
  def cost
    currency_for(component)
  end

  has_many :assignments, serializer: AssignmentSerializer
  has_one :purchase, serializer: PurchaseSerializer
  has_many :activities, serializer: ActivitySerializer
  belongs_to :default_location, serializer: LocationSerializer

  belongs_to :department, serializer: DepartmentSerializer
  belongs_to :model, serializer: ModelSerializer
  belongs_to :vendor, serializer: VendorSerializer
  belongs_to :category, serializer: CategorySerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
  has_many :documentations, serializer: Documentations::IndexSerializer
end
