class Purchase < ApplicationRecord
  include Ownable
  include PgSearch::Model

  pg_search_scope(
    :search,
    associated_against: {
      order: [:order_number],
      item: [:name, :asset_tag, :serial],
      accessory: [:name, :serial, :model_number],
      component: [:name, :serial, :model_number],
      consumable: [:name, :serial, :model_number],
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  tracked
  resourcify

  monetize :cost_cents

  belongs_to :item
  belongs_to :accessory
  belongs_to :component
  belongs_to :consumable
  belongs_to :order
end
