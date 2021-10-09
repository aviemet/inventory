class Manufacturer < ApplicationRecord
  include Ownable
  include Contactable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:name, :asset_tag, :serial, :cost_cents], 
    using: {
      tsearch: { prefix: true }, 
      trigram: {}
    }
  )

  slug :name

  resourcify
  audited

  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :models
  has_many :items, through: :models
  has_many :accessories, through: :models
  has_many :consumables, through: :models
  has_many :components, through: :models
end
