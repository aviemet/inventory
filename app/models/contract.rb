class Contract < ApplicationRecord
  include Ownable

  audited

  belongs_to :contract_type
  belongs_to :vendor
end
