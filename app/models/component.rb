class Component < ApplicationRecord
  include Ownable
  include Assignable::Quantity
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

  belongs_to :model
  belongs_to :vendor, required: false
  belongs_to :default_location, class_name: "Location", required: false
  has_one :category, through: :model
  has_one :manufacturer, through: :model

  validates :qty, numericality: { greater_than_or_equal_to: 0 }
  validates_presence_of :name

  def self.associated_models
    [:manufacturer, :category, :vendor]
  end
end
