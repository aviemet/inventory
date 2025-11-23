# == Schema Information
#
# Table name: contracts
#
#  id          :bigint           not null, primary key
#  begins_at   :datetime
#  ends_at     :datetime
#  name        :string           not null
#  notes       :text
#  number      :string
#  slug        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :bigint           not null
#  vendor_id   :bigint           not null
#
# Indexes
#
#  index_contracts_on_category_id  (category_id)
#  index_contracts_on_slug         (slug) UNIQUE
#  index_contracts_on_vendor_id    (vendor_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (vendor_id => vendors.id)
#
class Contract < ApplicationRecord
  include Ownable
  include Categorizable
  include Documentable

  include PgSearchable
  pg_search_config(
    against: [:name, :number],
    enable_multisearch: true,
  )

  pg_search_scope(
    :search,
    against: [:name, :number], associated_against: {
      vendor: [:name],
      category: [:name]
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  slug :name

  tracked
  resourcify

  validates :name, presence: true
  validates :vendor_id, presence: true
  validates :category_id, presence: true

  belongs_to :vendor

  scope :includes_associated, -> { includes([:vendor, :category, :documentations]) }
end
