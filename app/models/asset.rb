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
class Asset < ApplicationRecord
  include Ownable
  include Purchasable
  include Fieldable
  include Assignable
  include Documentable

  pg_search_scope(
    :search,
    against: [:name, :asset_tag, :serial, :cost_cents],
    associated_against: {
      model: [:name, :model_number],
      vendor: [:name],
      default_location: [:name],
      category: [:name],
      manufacturer: [:name]
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  tracked
  resourcify

  monetize :cost_cents, allow_blank: true, allow_nil: true, numericality: { greater_than_or_equal_to: 0 }

  validates :name, presence: true

  belongs_to :vendor, optional: true
  belongs_to :default_location, class_name: "Location", optional: true
  belongs_to :model
  has_one :category, through: :model
  has_one :manufacturer, through: :model
  has_one :warranty, required: false, dependent: :destroy

  scope :includes_associated, -> { includes([:category, :model, :assignments, :default_location, :department, :vendor, :manufacturer, :status_label, :activities, :documentations]) }

  scope :find_by_category, ->(category) { includes([:category]).where('model.category' => category) }

  def location
    self.default_location
  end
end
