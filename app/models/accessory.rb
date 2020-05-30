class Accessory < ApplicationRecord
  include Purchasable
  include Ownable

  belongs_to :item
end
