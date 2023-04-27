class Contract < ApplicationRecord
  include Ownable
  include PgSearch::Model
  include Categorizable

  pg_search_scope(
    :search,
    against: [:name, :number], associated_against: {
      vendor: [:name],
      category: [:name]
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  tracked
  resourcify

  validates_presence_of :name

  belongs_to :vendor

  scope :includes_associated, -> { includes([:vendor, :category]) }
end
