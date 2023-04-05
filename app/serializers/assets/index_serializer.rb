class Assets::IndexSerializer < ApplicationSerializer
  object_as :asset

  attributes :name,
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
             :updated_at

  attribute :cost do
    currency_for(asset)
  end

  attribute :available_to_checkout do
    asset.available_to_checkout?
  end

  association :department, serializer: DepartmentSerializer
  association :assignments, serializer: AssignmentSerializer, view: :associations
  association :model, serializer: ModelSerializer
  association :vendor, serializer: VendorSerializer
  association :category, serializer: CategorySerializer
  association :manufacturer, serializer: ManufacturerSerializer
  association :location, serializer: LocationSerializer
  association :status_label, serializer: StatusLabelSerializer
end
