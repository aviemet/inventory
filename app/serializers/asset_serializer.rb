class AssetSerializer < ApplicationSerializer
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

  attribute
  def cost
    currency_for(asset)
  end

  attribute
  def available_to_checkout
    asset.available_to_checkout?
  end

  class AssociationsSerializer < AssetSerializer
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

  # view :index do
  #   association :department, serializer: DepartmentSerializer
  #   association :assignments, serializer: AssignmentSerializer, view: :associations
  #   association :model, serializer: ModelSerializer
  #   association :vendor, serializer: VendorSerializer
  #   association :category, serializer: CategorySerializer
  #   association :manufacturer, serializer: ManufacturerSerializer
  #   association :location, serializer: LocationSerializer
  #   association :status_label, serializer: StatusLabelSerializer
  # end

  # view :show do
  #   include_view :associations

  #   association :history, name: :activities, serializer: ActivitySerializer
  # end

  # view :new do
  #   include_view :new

  #   exclude :assigned
  # end

  # view :shallow do
  #   only :name, :asset_tag
  # end

  # view :as_options do
  #   only :id, :name, :default_location_id
  # end
end
