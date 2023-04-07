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

  tracked
  resourcify

  validates_presence_of :name

  belongs_to :category
  belongs_to :vendor

  scope :includes_associated, -> { includes([:vendor, :category]) }

  def self.find_by_category(category)
    self.where(category:)
  end
end
