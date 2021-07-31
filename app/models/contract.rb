class Contract < ApplicationRecord
  include Ownable

  audited

  belongs_to :contract_type
  belongs_to :vendor

  # Sunspot search #

  def self.associated_models
    [:vendor, :contract_type]
  end

end
