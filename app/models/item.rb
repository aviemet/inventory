class Item < ApplicationRecord
  include Purchasable

  belongs_to :item_category
  belongs_to :brand
end
