class Contract < ApplicationRecord
  include Ownable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:name, :number], associated_against: { 
      vendor: [:name],
      category: [:name]
    }, using: {
      tsearch: { prefix: true }, 
      trigram: {}
    }
  )

  audited

  belongs_to :category
  belongs_to :vendor

  def self.associated_models
    [:vendor, :category]
  end

end
