class Manufacturer < ApplicationRecord
  include Ownable
  include Contactable
  include Documentable

  multisearchable(
    against: [:name],
    additional_attributes: ->(record) { { label: record.name } },
  )

  pg_search_scope(
    :search,
    against: [:name, :slug], associated_against: {
      models: [:name, :model_number],
      items: [:name, :asset_tag, :serial],
      accessories: [:name, :asset_tag, :serial],
      consumables: [:name, :asset_tag, :serial],
      components: [:name, :asset_tag, :serial],
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  slug :name

  tracked
  resourcify

  validates :name, presence: true, uniqueness: true

  has_many :models
  has_many :items, through: :models
  has_many :accessories, through: :models
  has_many :consumables, through: :models
  has_many :components, through: :models

  scope :includes_associated, -> { includes([:models, :items, :accessories, :consumables, :components, :documentations]) }
end
