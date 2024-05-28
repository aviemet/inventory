# == Schema Information
#
# Table name: licenses
#
#  id              :bigint           not null, primary key
#  cost_cents      :integer
#  cost_currency   :string           default("USD"), not null
#  expires_at      :datetime
#  key             :text
#  licenser_email  :string
#  licenser_name   :string
#  maintained      :boolean          default(FALSE), not null
#  name            :string           not null
#  notes           :text
#  purchased_at    :datetime
#  qty             :integer
#  reassignable    :boolean          default(FALSE), not null
#  terminates_at   :datetime
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  category_id     :bigint           not null
#  manufacturer_id :bigint           not null
#  status_label_id :bigint
#  vendor_id       :bigint
#
# Indexes
#
#  index_licenses_on_category_id      (category_id)
#  index_licenses_on_manufacturer_id  (manufacturer_id)
#  index_licenses_on_status_label_id  (status_label_id)
#  index_licenses_on_vendor_id        (vendor_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (manufacturer_id => manufacturers.id)
#  fk_rails_...  (status_label_id => status_labels.id)
#  fk_rails_...  (vendor_id => vendors.id)
#
class License < ApplicationRecord
  include Ownable
  include Assignable::Quantity
  include Purchasable
  include Fieldable
  include Categorizable
  include Documentable

  multisearchable(
    against: [:name, :licenser_email],
    additional_attributes: ->(record) { { label: record.name } },
  )

  pg_search_scope(
    :search,
    against: [:name, :qty, :key, :licenser_name, :licenser_email], associated_against: {
      vendor: [:name],
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

  monetize :cost_cents

  belongs_to :vendor
  belongs_to :manufacturer

  validates :name, presence: true

  alias_attribute :seats, :qty

  scope :includes_associated, -> { includes([:category, :assignments, :department, :vendor, :manufacturer, :documentations]) }
end
