class Vendor < ApplicationRecord
  include Contactable
  include Ownable

  slug :name

  audited

  has_many :contracts
  has_many :items
  has_many :accessories
  has_many :consumables
  has_many :components
end
