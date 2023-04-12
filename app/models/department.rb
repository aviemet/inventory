class Department < ApplicationRecord
  include Contactable
  include Ownable
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:name, :notes], associated_against: {
      location: [:name]
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    }
  )

  slug :name

  tracked
  resourcify

  validates_presence_of :name

  belongs_to :location, optional: true # primary location, such as main office of department
  belongs_to :manager, class_name: :Person, optional: true

  # Reverse polymorphic relationships. Allows searching related models through Ownable interface
  # 	Department.items, Department.contracts, etc.
  has_many :ownerships
  {
    assets: 'Asset',
    items: 'Item',
    accessories: 'Accessory',
    components: 'Component',
    consumables: 'Consumable',
    licenses: 'License',
    contracts: 'Contract',
    people: 'Person',
    vendors: 'Vendor'
  }.each_pair do |assoc, model|
    has_many assoc, through: :ownerships, source: :ownable, source_type: model.to_s
  end

  scope :includes_associated, -> { includes([:location, :manager, :items, :contracts, :people, :vendors]) }
end
