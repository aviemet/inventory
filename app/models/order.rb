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
  tracked

  monetize :shipping_cents
  monetize :tax_cents
  monetize :discount_cents

  belongs_to :user
  belongs_to :vendor
  has_one :person, through: :user
  has_many :purchases

  scope :includes_associated, -> { includes([:purchase, :item, :accessory, :consumable, :component, :user, :vendor])}

  def cost
    self.joins(:purchases).select("SUM(purchases.cost) AS cost")
  end
end
