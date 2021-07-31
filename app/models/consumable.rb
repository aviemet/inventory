class Consumable < ApplicationRecord
  include Ownable
  include Assignable::Consume
  include Purchasable
  include Fieldable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:name, :model_number], associated_against: { 
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

  belongs_to :manufacturer
  belongs_to :category
  belongs_to :vendor
  belongs_to :default_location, class_name: "Location", required: false

  validates :qty, numericality: { greater_than_or_equal_to: 0 }

  def self.associated_models
    [:manufacturer, :category, :vendor]
  end
end
