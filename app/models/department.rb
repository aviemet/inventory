class Department < ApplicationRecord
  include Contactable
  include Ownable

  resourcify
  belongs_to :location, optional: true

  # Reverse polymorphic relationships. Allows searching related models through Ownable interface
  # 	Department.items, Department.contracts, etc.
  has_many :ownerships
  { items: 'Item', contracts: 'Contract', people: 'Person', vendors: 'Vendor' }.each_pair do |assoc, model|
    has_many assoc, through: :ownerships, source: :ownable, source_type: model
  end
end
