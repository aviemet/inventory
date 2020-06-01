class Company < ApplicationRecord
  has_many :user_companies, dependent: :destroy
  has_many :users, through: :user_companies

  # Reverse polymorphic relationships. Allows searching related models through Ownable interface
  # 	Company.items, Company.contracts, etc.
  has_many :ownerships
  { items: 'Item', departments: 'Department', locations: 'Location', contracts: 'Contract', networks: 'Network', people: 'Person', vendors: 'Vendor' }.each_pair do |assoc, model|
    has_many assoc, through: :ownerships, source: :ownable, source_type: model
  end
end
