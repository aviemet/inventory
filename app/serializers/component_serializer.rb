class ComponentSerializer < Assignable::QuantitySerializer
  attributes :name,
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
             :updated_at

  attribute
  def cost
    currency_for(component)
  end

  # view :associations do
  #   association :department, serializer: DepartmentSerializer
  #   association :assignments, serializer: AssignmentSerializer, view: :associations
  #   association :purchase, serializer: PurchaseSerializer
  #   association :activities, serializer: ActivitySerializer
  #   association :model, serializer: ModelSerializer
  #   association :vendor, serializer: VendorSerializer
  #   association :default_location, serializer: LocationSerializer
  #   association :category, serializer: CategorySerializer
  #   association :manufacturer, serializer: ManufacturerSerializer
  # end

  # view :index do
  #   association :department, serializer: DepartmentSerializer
  #   association :model, serializer: ModelSerializer
  #   association :vendor, serializer: VendorSerializer
  #   association :category, serializer: CategorySerializer
  #   association :manufacturer, serializer: ManufacturerSerializer
  # end

  # view :show do
  #   include_view :associations
  # end
end
