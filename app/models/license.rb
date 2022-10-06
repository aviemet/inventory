class License < ApplicationRecord
  include Ownable
  include Assignable::Quantity
  include Purchasable
  include Fieldable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:name, :seats, :key, :licenser_name, :licenser_email], associated_against: { 
      vendor: [:name],
      category: [:name],
      manufacturer: [:name]
    }, using: {
      tsearch: { prefix: true }, 
      trigram: {}
    }
  )

  resourcify
  audited

  monetize :cost_cents

  belongs_to :category
  belongs_to :vendor
  belongs_to :manufacturer

  validates_presence_of :name

  alias_attribute :qty, :seats

  scope :includes_associated, -> { includes([:category, :assignments, :department, :vendor, :manufacturer])}
end
