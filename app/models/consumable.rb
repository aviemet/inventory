class Consumable < ApplicationRecord
  include Ownable
  include Assignable::Consume
  include Purchasable
  include Fieldable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:name], associated_against: {
      model: [:name, :model_number],
      vendor: [:name],
      default_location: [:name],
      category: [:name],
      manufacturer: [:name]
    }, using: {
      tsearch: { prefix: true }, 
      trigram: {}
    }
  )

  audited

  monetize :cost_cents

  belongs_to :model
  belongs_to :vendor, required: false
  belongs_to :default_location, class_name: "Location", required: false
  has_one :category, through: :model
  has_one :manufacturer, through: :model

  validates :qty, numericality: { greater_than_or_equal_to: 0 }

  scope :includes_associated, -> { includes([:manufacturer, :category, :vendor, :model]) }

end
