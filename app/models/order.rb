class Order < ApplicationRecord  
  include Ownable

  resourcify
  audited

  monetize :shipping_cents
  monetize :tax_cents
  monetize :discount_cents

  belongs_to :user
  belongs_to :vendor
  has_many :purchases

  def cost
    self.joins(:purchases).select("SUM(purchases.cost) AS cost")
  end

  def self.associated_models
    [:purchase, :item, :accessory, :consumable, :component, :user, :vendor]
  end
end
