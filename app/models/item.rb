class Item < ApplicationRecord
  include Ownable
  include Purchasable
  include Fieldable

  belongs_to :item_category
  belongs_to :brand
end
