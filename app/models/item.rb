class Item < ApplicationRecord
  belongs_to :purchase
  has_one :item_category
  has_one :brand
  has_many :interfaces
  has_many :items_assignments
  has_many :items, through: :items_assignments
end
