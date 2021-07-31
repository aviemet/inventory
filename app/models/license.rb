class License < ApplicationRecord
  include Ownable
  include Assignable::Consume
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

  def self.associated_models
    [:category, :assignments, :department, :vendor, :manufacturer]
  end
end
