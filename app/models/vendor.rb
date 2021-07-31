class Vendor < ApplicationRecord
  include Contactable
  include Ownable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:name, :url],
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
end
