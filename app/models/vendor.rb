class Vendor < ApplicationRecord
  include Contactable
  include Ownable

  has_many :contracts
end
