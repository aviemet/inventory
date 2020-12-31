class Department < ApplicationRecord
  include Contactable
  include Ownable
  include AssignToable

  slug :name

  resourcify

  belongs_to :location, optional: true
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

  # default_scope { includes(:ownerships) }

  validates_presence_of :name
end
