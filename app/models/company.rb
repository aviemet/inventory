class Company < ApplicationRecord
	has_many :users, :through => :user_companies

	# Company is the top level object, these associated records are dependant 
	has_many :departments, :dependent => :destroy
	has_many :locations, :dependent => :destroy
  has_many :user_companies, :dependent => :destroy

	# Reverse polymorphic relationships. Allows searching related models through Ownable interface
	# 	Company.items, Company.contracts, etc.
	has_many :ownerships
	{ items: 'Item', contracts: 'Contract', networks: 'Network', people: 'Person', vendors: 'Vendor' }.each_pair do |assoc, model|
		has_many assoc, :through => :ownerships, :source => :ownable, :source_type => model
	end

end
