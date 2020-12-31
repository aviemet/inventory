class Vendor < ApplicationRecord
  include Contactable
  include Ownable

  slug :name

  has_many :contracts
end
