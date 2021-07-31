class Contract < ApplicationRecord
  include Ownable

  audited

  belongs_to :category
  belongs_to :vendor

  # Sunspot search #

  def self.associated_models
    [:vendor, :category]
  end

end
