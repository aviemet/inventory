# == Schema Information
#
# Table name: assets
#
#  id                  :bigint           not null, primary key
#  asset_tag           :string
#  cost_cents          :integer
#  cost_currency       :string           default("USD"), not null
#  min_qty             :integer
#  name                :string           not null
#  notes               :text
#  purchased_at        :datetime
#  qty                 :integer
#  requestable         :boolean          default(FALSE), not null
#  serial              :string
#  type                :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  default_location_id :bigint
#  model_id            :bigint           not null
#  status_label_id     :bigint
#  vendor_id           :bigint
#
# Indexes
#
#  index_assets_on_asset_tag            (asset_tag) UNIQUE
#  index_assets_on_default_location_id  (default_location_id)
#  index_assets_on_model_id             (model_id)
#  index_assets_on_serial               (serial) UNIQUE
#  index_assets_on_status_label_id      (status_label_id)
#  index_assets_on_vendor_id            (vendor_id)
#
# Foreign Keys
#
#  fk_rails_...  (default_location_id => locations.id)
#  fk_rails_...  (model_id => models.id)
#  fk_rails_...  (status_label_id => status_labels.id)
#  fk_rails_...  (vendor_id => vendors.id)
#
class AssetSerializer < ApplicationSerializer
  object_as :asset

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

  type :number
  def cost
    currency_for(asset)
  end

  attribute :available_to_checkout do
    asset.available_to_checkout?
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
