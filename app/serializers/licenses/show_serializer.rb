class LicenseSerializer < Assignable::QuantitySerializer
  object_as :license

  attributes :name,
             :qty,
             :key,
             :licenser_name,
             :licenser_email,
             :reassignable,
             :cost_currency,
             :purchased_at,
             :expires_at,
             :terminates_at,
             :maintained,
             :notes,
             :category_id,
             :vendor_id,
             :manufacturer_id,
             :created_at,
             :updated_at

  attribute :cost do
    currency_for(component)
  end

  belongs_to :department, serializer: DepartmentSerializer
  has_many :assignments, serializer: AssignmentSerializer
  has_one :purchase, serializer: PurchaseSerializer
  has_many :activities, serializer: ActivitySerializer
  belongs_to :category, serializer: CategorySerializer
  belongs_to :vendor, serializer: VendorSerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
  belongs_to :assignments, serializer: AssignmentSerializer, view: :associations
end
