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
class Item < Asset
  include Assignable::Single
  include AssignToable

  multisearchable(
    against: [:name, :asset_tag, :serial],
    additional_attributes: ->(record) { { label: record.name } },
  )

  tracked
  resourcify

  validates :model, presence: true

  has_many :nics, dependent: :destroy
  has_many :ips, -> { where(active: true) }, through: :nics, source: :ip_leases
  has_many :ip_leases, through: :nics
  belongs_to :default_location, class_name: "Location"

  accepts_nested_attributes_for :nics # , reject_if: ->(attributes){ attributes[:ip].blank? && attributes[:mac].blank? }, allow_destroy: true

  scope :no_nics, -> { includes(:nics).where(nics: { id: nil }) }

  scope :includes_associated, -> { includes([:category, :model, :assignments, :default_location, :department, :vendor, :manufacturer, :status_label, :activities, :ips, :nics, :ip_leases]) }

  def location
    if assigned?
      assignment.location
    else
      self.default_location
    end
  end
end
