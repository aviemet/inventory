class Accessory < ApplicationRecord
  include Ownable
  include Assignable::Quantity
  include Purchasable
  include Fieldable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:name, :serial, :model_number], associated_against: {
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
  audited

  monetize :cost_cents

  belongs_to :model
  belongs_to :vendor, required: false
  belongs_to :default_location, class_name: "Location", required: false
  has_one :category, through: :model
  has_one :manufacturer, through: :model

  def self.associated_models
    [:category, :assignments, :department, :vendor, :manufacturer]
  end
end
