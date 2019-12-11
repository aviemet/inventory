class Vendor < ApplicationRecord
  include Contactable
  
  belongs_to :contract
end
