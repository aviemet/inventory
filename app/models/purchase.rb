class Purchase < ApplicationRecord
  include Ownable

  has_many :asset
  belongs_to :vendor
end
