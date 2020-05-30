class Item < ApplicationRecord
  include Purchasable
  include Ownable

  belongs_to :item_category
  belongs_to :brand
end
