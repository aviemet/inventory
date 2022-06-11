class Department < ApplicationRecord
  include Contactable
  include Ownable
  include AssignToable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:name], associated_against: { 
      location: [:name]
    }, using: {
      tsearch: { prefix: true }, 
      trigram: {}
    }
  )

  slug :name

  resourcify
  audited

  validates_presence_of :name

  belongs_to :location, optional: true # primary location, such as main office of department
  belongs_to :manager, class_name: :Person, optional: true

  # Reverse polymorphic relationships. Allows searching related models through Ownable interface
  # 	Department.items, Department.contracts, etc.
  has_many :ownerships
  {
    items: 'Item',
    contracts: 'Contract',
    people: 'Person',
    vendors: 'Vendor'
  }.each_pair do |assoc, model|
    has_many assoc, through: :ownerships, source: :ownable, source_type: model.to_s
  end

  scope :includes_associated, -> { includes([:locations, :managers, :items, :contracts, :people, :vendors]) }
end
