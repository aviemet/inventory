class Purchase < ApplicationRecord
  has_many :items
  has_one :vendor
end
