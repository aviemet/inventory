class Item < ApplicationRecord
  belongs_to :item_category
  belongs_to :brand
end
