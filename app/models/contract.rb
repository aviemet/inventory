class Contract < ApplicationRecord
  belongs_to :contract_type
  belongs_to :vendor
end
