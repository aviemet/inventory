class Accessory < ApplicationRecord
  include Purchasable

  belongs_to :item
end
