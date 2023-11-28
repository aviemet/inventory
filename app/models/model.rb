class Model < ApplicationRecord
  include Ownable
  include Fieldable
  include Categorizable
  include Documentable

  multisearchable(
    against: [:name, :model_number],
    additional_attributes: ->(record) { { label: record.name } },
  )

  pg_search_scope(
    :search,
    against: [:name, :model_number], associated_against: {
      category: [:name],
      manufacturer: [:name]
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  slug :name

  tracked
  resourcify

  belongs_to :manufacturer
  has_many :items, -> { includes_associated }, dependent: :nullify
  has_many :accessories, -> { includes_associated }, dependent: :nullify
  has_many :consumables, -> { includes_associated }, dependent: :nullify
  has_many :components, -> { includes_associated }, dependent: :nullify

  validates :name, presence: true
  validates :name, uniqueness: { scope: :model_number, message: "Model already exists" }

  scope :includes_associated, -> { includes([:manufacturer, :category, :items, :accessories, :consumables, :components, :documentations]) }

  def types
    self.category.type.where(model: self)
  end
end
