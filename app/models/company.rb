class Company < ApplicationRecord
  include Contactable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:name], 
    using: {
      tsearch: { prefix: true }, 
      trigram: {}
    }
  )

  slug :name

  resourcify
  audited

  has_many :users, through: :roles, class_name: :User, source: :users

  # Reverse polymorphic relationships. Allows searching related models through Ownable interface
  # 	Company.items, Company.contracts, etc.
  has_many :ownerships
  {
    items: :Item,
    accessories: :Accessory,
    consumables: :Consumable,
    components: :Component,
    models: :Model,
    departments: :Department,
    locations: :Location,
    licenses: :License,
    contracts: :Contract,
    networks: :Network,
    people: :Person,
    purchases: :Purchase,
    vendors: :Vendor,
    manufacturers: :Manufacturer,
    orders: :Order,
    categories: :Category
  }.each_pair do |assoc, model|
    has_many assoc, through: :ownerships, source: :ownable, source_type: model.to_s
  end

  has_many :models, through: :manufacturers

  scope :includes_associated, -> { includes([:departments, :locations, :ownerships])}

  validates_presence_of :name

end
