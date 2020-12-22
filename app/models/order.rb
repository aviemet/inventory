class Order < ApplicationRecord
  monetize :shipping_cents
  monetize :tax_cents
  monetize :discount_cents

  belongs_to :user
  belongs_to :vendor
end
