class Company < ApplicationRecord
  resourcify

  include Contactable

  has_many :users, through: :roles, class_name: 'User', source: :users

  # Reverse polymorphic relationships. Allows searching related models through Ownable interface
  # 	Company.items, Company.contracts, etc.
  has_many :ownerships
  { items: 'Item', departments: 'Department', locations: 'Location', contracts: 'Contract', networks: 'Network', people: 'Person', vendors: 'Vendor' }.each_pair do |assoc, model|
    has_many assoc, through: :ownerships, source: :ownable, source_type: model
  end

  default_scope { includes(:ownerships) }

  validates_presence_of :name
end
