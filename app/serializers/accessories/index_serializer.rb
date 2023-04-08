class Accessories::IndexSerializer < Assignable::QuantitySerializer
  object_as :accessory

  attributes(
    :id,
    :name,
    :asset_tag,
    :serial,
    :cost_currency,
    :purchased_at,
    :requestable,
    :qty,
    :min_qty,
    :notes,
    :model_id,
    :vendor_id,
    :default_location_id,
    :type,
    :created_at,
    :updated_at,
  )

  attribute :cost do
    currency_for(accessory)
  end

  belongs_to :vendor, serializer: VendorSerializer
  belongs_to :default_location, serializer: LocationSerializer
  belongs_to :model, serializer: ModelSerializer
  belongs_to :status_label, serializer: StatusLabelSerializer
  has_many   :assignments, serializer: AssignmentSerializer
  has_many   :activities, serializer: ActivitySerializer
  has_one    :category, serializer: CategorySerializer
  has_one    :manufacturer, serializer: ManufacturerSerializer
  has_one    :company, serializer: CompanySerializer
  has_one    :department, serializer: DepartmentSerializer
  has_one    :purchase, serializer: PurchaseSerializer
end
