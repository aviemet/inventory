class Model < ApplicationRecord
  include Ownable
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

  resourcify
  tracked

  belongs_to :manufacturer
  belongs_to :category
  has_many :items, -> { includes_associated }
  has_many :accessories, -> { includes_associated }
  has_many :consumables, -> { includes_associated }
  has_many :components, -> { includes_associated }

  validates_presence_of :name
  validates :name, uniqueness: { scope: :model_number, message: "Model already exists" }

  scope :includes_associated, -> { includes([:manufacturer, :category, :items, :accessories, :consumables, :components]) }

  scope :find_by_category, ->(type){ joins(:category).where("category.categorizable_type" => type.to_s.singularize.camelize) }

  def types
    self.category.type.where(model: self)
  end
end
