class Asset < ApplicationRecord
  include Ownable
  include Purchasable
  include Fieldable
  include Assignable
  include Documentable

  pg_search_scope(
    :search,
    against: [:name, :asset_tag, :serial, :cost_cents],
    associated_against: {
      model: [:name, :model_number],
      vendor: [:name],
      default_location: [:name],
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

  monetize :cost_cents, allow_blank: true, allow_nil: true, numericality: { greater_than_or_equal_to: 0 }

  validates :name, presence: true

  belongs_to :vendor, optional: true
  belongs_to :default_location, class_name: "Location", optional: true
  belongs_to :model
  has_one :category, through: :model
  has_one :manufacturer, through: :model
  has_one :warranty, required: false, dependent: :destroy

  scope :includes_associated, -> { includes([:category, :model, :assignments, :default_location, :department, :vendor, :manufacturer, :status_label, :activities, :documentations]) }

  scope :find_by_category, ->(category) { includes([:category]).where('model.category' => category) }

  def location
    self.default_location
  end
end
