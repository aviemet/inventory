class Vendor < ApplicationRecord
  include Contactable
  include Ownable

  slug :name

  audited

  has_many :contracts
end
