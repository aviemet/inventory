class License < ApplicationRecord
  include Ownable
  include Assignable::Quantity
  include Purchasable
  include Fieldable
  include PgSearch::Model
  include Categorizable
  include Documentable

  multisearchable against: [:name]

  pg_search_scope(
    :search,
    against: [:name, :qty, :key, :licenser_name, :licenser_email], associated_against: {
      vendor: [:name],
      category: [:name],
      manufacturer: [:name]
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  tracked
  resourcify

  monetize :cost_cents

  belongs_to :vendor
  belongs_to :manufacturer

  validates_presence_of :name

  alias_attribute :seats, :qty

  scope :includes_associated, -> { includes([:category, :assignments, :department, :vendor, :manufacturer, :documentations]) }
end
