class Vendor < ApplicationRecord
  include Contactable
  include Ownable
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:name, :url], associated_against: {
      item: [:count]
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    }
  )

  tracked
  resourcify

  slug :name

  has_many :contracts
  has_many :items
  has_many :accessories
  has_many :consumables
  has_many :components
  has_many :licenses

  validates_presence_of :name

  scope :includes_associated, -> { includes([:contracts, :items, :accessories, :consumables, :components, :licenses]) }
end
