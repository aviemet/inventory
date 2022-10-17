class Company < ApplicationRecord
  include Contactable
  include PgSearch::Model

  after_create :seed_categories
  before_destroy :safely_orphan_or_destroy_dependencies

  pg_search_scope(
    :search, 
    against: [:name], 
    using: {
      tsearch: { prefix: true }, 
      trigram: {}
    }
  )

  slug :name

  resourcify
  audited

  attribute :default_currency, default: MoneyRails.default_currency

  has_many :users, through: :roles, class_name: :User, source: :users
  has_many :ldaps, dependent: :destroy

  # Reverse polymorphic relationships. Allows searching related models through Ownable interface
  # 	Company.items, Company.contracts, etc.
  has_many :ownerships
  {
    items: "Item",
    accessories: "Accessory",
    consumables: "Consumable",
    components: "Component",
    models: "Model",
    departments: "Department",
    locations: "Location",
    licenses: "License",
    contracts: "Contract",
    networks: "Network",
    people: "Person",
    purchases: "Purchase",
    vendors: "Vendor",
    manufacturers: "Manufacturer",
    orders: "Order",
    categories: "Category"
  }.each_pair do |assoc, model|
    has_many assoc, through: :ownerships, source: :ownable, source_type: model
  end

  # has_many :models, through: :manufacturers

  scope :includes_associated, -> { includes([:departments, :locations, :ownerships])}

  validates_presence_of :name

  private

  def safely_orphan_or_destroy_dependencies
    self.transaction do
      self.items.destroy_all
      self.accessories.destroy_all
      self.consumables.destroy_all
      self.models.destroy_all
      self.departments.destroy_all
      self.locations.destroy_all
      self.licenses.destroy_all
      self.contracts.destroy_all
      self.networks.destroy_all
      self.people.destroy_all
      self.purchases.destroy_all
      self.vendors.destroy_all
      self.manufacturers.destroy_all
      self.orders.destroy_all
      self.categories.destroy_all
      self.users.each{ |user| user.destroy }
    end
  end

  def seed_categories
    {
      Item: ["Desktop", "Laptop", "Server"],
      Accessory: ["Keyboard", "Mouse"],
      Consumable: ["Toner", "Paper"],
      Component: ["Memory", "SSD", "HDD"],
      License: ["Operating System", "Office Software"],
      Email: ["Work", "Personal"],
      Address: ["Work", "Personal"],
      Phone: ["Home", "Mobile", "Office"],
      Contract: ["Utility", "Leasing", "SLA"]
    }.each do |type, categories|
      categories.each do |category|
        Category.create!({
          name: category,
          categorizable_type: type,
          company: self,
        })
      end
    end
  end

end
