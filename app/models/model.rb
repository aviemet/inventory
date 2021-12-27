class Model < ApplicationRecord
  include Fieldable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:name, :model_number], associated_against: { 
      category: [:name],
      manufacturer: [:name]
    }, using: {
      tsearch: { prefix: true }, 
      trigram: {}
    }
  )

  slug :name

  audited

  belongs_to :manufacturer
  belongs_to :category
  has_many :items
  has_many :accessories
  has_many :consumables
  has_many :components

  validates_presence_of :name
  validates :name, uniqueness: { scope: :model_number, message: "Model already exists" }

  scope :includes_associated, -> { includes([:manufacturer, :category]) }
end
