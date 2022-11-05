class Asset < ApplicationRecord
  include Ownable
  include Purchasable
  include Fieldable
  include PgSearch::Model

  enum type: {
    Item: :Item,
    Accessory: :Accessory,
    Component: :Component,
    Consumable: :Consumable,
  }

  # attribute :type, default: self.class.name

  pg_search_scope(
    :search,
    against: [:name, :asset_tag, :serial, :cost_cents], associated_against: {
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

  resourcify
  tracked

  monetize :cost_cents, numericality: { greater_than_or_equal_to: 0 }

  validates_presence_of :name

  belongs_to :vendor, required: false
  belongs_to :default_location, class_name: "Location", required: false
  belongs_to :model
  has_one :category, through: :model
  has_one :manufacturer, through: :model
  has_one :warranty, required: false
  # has_one :location, through: :assignment

  scope :includes_associated, -> { includes([:category, :model, :assignments, :default_location, :department, :vendor, :manufacturer, :status_type, :activities]) }

  scope :find_by_category, ->(category) { includes([:category]).where('model.category' => category) }

  def location
    if assigned?
      assignment.location
    else
      self.default_location
    end
  end

end
