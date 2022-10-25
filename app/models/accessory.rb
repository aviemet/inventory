class Accessory < ApplicationRecord
  include Ownable
  include Assignable::Quantity
  include Purchasable
  include Fieldable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:name, :serial, :asset_tag], associated_against: {
      vendor: [:name],
      default_location: [:name],
      category: [:name],
      model: [:name, :model_number],
      manufacturer: [:name]
    }, using: {
      tsearch: { prefix: true }, 
      trigram: {}
    }
  )

  resourcify
  tracked

  monetize :cost_cents

  belongs_to :vendor, required: false
  belongs_to :default_location, class_name: "Location", required: false
  belongs_to :model
  has_one :category, through: :model
  has_one :manufacturer, through: :model

  scope :includes_associated, -> { includes([:category, :assignments, :department, :vendor, :manufacturer, :model]) }

  def self.find_by_category(category)
    self.includes(:model, :category).where('model.category' => category)
  end

end
