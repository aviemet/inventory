class Contract < ApplicationRecord
  include Ownable
  include PgSearch::Model
  include Categorizable
  include Documentable

  multisearchable(
    against: [:name, :number],
    additional_attributes: ->(record) { { label: record.name } },
  )

  pg_search_scope(
    :search,
    against: [:name, :number], associated_against: {
      vendor: [:name],
      category: [:name]
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  slug :name

  tracked
  resourcify

  validates_presence_of :name

  belongs_to :vendor

  scope :includes_associated, -> { includes([:vendor, :category, :documentations]) }
end
