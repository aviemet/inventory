class Vendor < ApplicationRecord
  include Contactable
  include Ownable
  include Documentable

  multisearchable(
    against: [:name],
    additional_attributes: ->(record) { { label: record.name } },
  )

  pg_search_scope(
    :search,
    against: [:name, :url], associated_against: {
      items: [:name],
      contracts: [:name],
      accessories: [:name],
      consumables: [:name],
      components: [:name],
      licenses: [:name],
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
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
