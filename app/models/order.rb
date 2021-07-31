class Order < ApplicationRecord  
  include Ownable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:number], associated_against: { 
      user: [:email],
      person: [:first_name, :middle_name, :last_name, :employee_number, :job_title],
      vendor: [:name]
    }, using: {
      tsearch: { prefix: true }, 
      trigram: {}
    }
  )

  resourcify
  audited

  monetize :shipping_cents
  monetize :tax_cents
  monetize :discount_cents

  belongs_to :user
  belongs_to :person, through: :user
  belongs_to :vendor
  has_many :purchases

  def cost
    self.joins(:purchases).select("SUM(purchases.cost) AS cost")
  end

  def self.associated_models
    [:purchase, :item, :accessory, :consumable, :component, :user, :vendor]
  end
end
