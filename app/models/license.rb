class License < ApplicationRecord
  include Ownable
  include Assignable::Quantity
  include Purchasable
  include Fieldable
  include Categorizable
  include Documentable

  multisearchable(
    against: [:name, :licenser_email],
    additional_attributes: ->(record) { { label: record.name } },
  )

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
    ignoring: :accents,
  )

  tracked
  resourcify

  monetize :cost_cents

  belongs_to :vendor
  belongs_to :manufacturer

  validates :name, presence: true

  alias_attribute :seats, :qty

  scope :includes_associated, -> { includes([:category, :assignments, :department, :vendor, :manufacturer, :documentations]) }
end
