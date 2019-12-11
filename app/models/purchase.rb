class Purchase < ApplicationRecord
  include Ownable
  
  has_many :items
  has_one :vendor
end
