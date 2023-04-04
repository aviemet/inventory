class ConsumableSerializer < Assignable::ConsumeSerializer
  attributes :name,
             :min_qty,
             :qty,
             :cost,
             :cost_currency,
             :requestable,
             :notes,
             :model_id,
             :vendor_id,
             :default_location_id,
             :created_at,
             :updated_at

  attribute
  def cost
    currency_for(consumable)
  end
  
  # view :associations do
  #   association :purchase, serializer:  PurchaseSerializer
  #   association :activities, serializer: ActivitySerializer
  #   association :model, serializer:  ModelSerializer
  #   association :vendor, serializer:  VendorSerializer
  #   association :default_location, serializer: LocationSerializer
  #   association :category, serializer:  CategorySerializer
  #   association :manufacturer, serializer:  ManufacturerSerializer
  # end

  # view :index do
  #   association :model, serializer:  ModelSerializer
  #   association :vendor, serializer:  VendorSerializer
  #   association :category, serializer:  CategorySerializer
  #   association :manufacturer, serializer:  ManufacturerSerializer
  # end

  # view :show do
  #   association :purchase, serializer:  PurchaseSerializer
  #   association :assignments, serializer: AssignmentSerializer, view: :associations
  #   association :model, serializer:  ModelSerializer
  #   association :vendor, serializer:  VendorSerializer
  #   association :default_location, serializer: LocationSerializer
  #   association :category, serializer:  CategorySerializer
  #   association :manufacturer, serializer:  ManufacturerSerializer
  # end

end
