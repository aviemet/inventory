class Component < ApplicationRecord
  include Ownable
  include Assignable::Quantity
  include Purchasable
  include Fieldable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:name, :serial], associated_against: { 
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

  tracked

  monetize :cost_cents, numericality: { greater_than_or_equal_to: 0 }, allow_nil: true

  belongs_to :vendor, required: false
  belongs_to :default_location, class_name: "Location", required: false
  belongs_to :model
  has_one :category, through: :model
  has_one :manufacturer, through: :model

  validates_presence_of :name
  validates :qty, numericality: { greater_than_or_equal_to: 0 }, allow_blank: true

  scope :includes_associated, -> { includes([:manufacturer, :category, :vendor]) }

  def self.find_by_category(category)
    self.includes(:model, :category).where('model.category' => category)
  end

end
