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
    currency_for(license)
  end

  # view :associations do
  #   association :department, serializer: DepartmentSerializer
  #   association :assignments, serializer: AssignmentSerializer
  #   association :purchase, serializer: PurchaseSerializer
  #   association :activities, serializer: ActivitySerializer
  #   association :category, serializer: CategorySerializer
  #   association :vendor, serializer: VendorSerializer
  #   association :manufacturer, serializer: ManufacturerSerializer
  # end

  # view :index do
  #   association :department, serializer: DepartmentSerializer
  #   association :category, serializer: CategorySerializer
  #   association :vendor, serializer: VendorSerializer
  #   association :manufacturer, serializer: ManufacturerSerializer
  # end

  # view :show do
  #   include_view :associations

  #   association :assignments, serializer: AssignmentSerializer, view: :associations
  # end

end
