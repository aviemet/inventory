class Vendor < ApplicationRecord
  belongs_to :contract
  has_one :contact
end
