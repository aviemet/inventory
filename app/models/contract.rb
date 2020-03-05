class Contract < ApplicationRecord
  include Ownable
  
  belongs_to :contract_type
  belongs_to :vendor
end
