class Vendor < ApplicationRecord
  include Contactable
  include Ownable

  belongs_to :contract
end
