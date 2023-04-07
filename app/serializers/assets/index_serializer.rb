class Assets::IndexSerializer < ApplicationSerializer
  object_as :asset

  attributes(
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
    currency_for(asset)
  end

  attribute :available_to_checkout do
    asset.available_to_checkout?
  end

  belongs_to :department, serializer: DepartmentSerializer
  has_many :assignments, serializer: AssignmentSerializer
  belongs_to :model, serializer: ModelSerializer
  belongs_to :vendor, serializer: VendorSerializer
  belongs_to :category, serializer: CategorySerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
  belongs_to :location, serializer: LocationSerializer
  belongs_to :status_label, serializer: StatusLabelSerializer
end
