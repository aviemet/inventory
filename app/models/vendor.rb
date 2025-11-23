# == Schema Information
#
# Table name: vendors
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  slug       :string           not null
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_vendors_on_slug  (slug) UNIQUE
#
class Vendor < ApplicationRecord
  include Contactable
  include Ownable
  include Documentable

  include PgSearchable
  pg_search_config(
    against: [:name, :url],
    associated_against: {
      items: [:name],
      contracts: [:name],
      accessories: [:name],
      consumables: [:name],
      components: [:name],
      licenses: [:name],
    },
    enable_multisearch: true,
  )

  tracked
  resourcify

  slug :name

  has_many :contracts, dependent: :restrict_with_exception
  has_many :items, dependent: :nullify
  has_many :accessories, dependent: :nullify
  has_many :consumables, dependent: :nullify
  has_many :components, dependent: :nullify
  has_many :licenses, dependent: :nullify

  validates :name, presence: true

  scope :includes_associated, -> { includes([:contracts, :items, :accessories, :consumables, :components, :licenses, :documentations]) }
end
