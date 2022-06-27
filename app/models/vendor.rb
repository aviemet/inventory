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

  slug :name

  audited

  has_many :contracts
  has_many :items
  has_many :accessories
  has_many :consumables
  has_many :components
  has_many :licenses

  scope :includes_associated, -> { includes([:contracts, :items, :accessories, :consumables, :components, :licenses]) }
end
