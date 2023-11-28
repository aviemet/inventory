class Company < ApplicationRecord
  include Contactable
  include Documentable

  before_destroy :safely_orphan_or_destroy_dependencies

  SETTINGS_KEYS = %i[primary_color secondary_color company_field_name department_field_name default_eula enable_2fa].freeze
  store_accessor :settings, *SETTINGS_KEYS

  multisearchable(
    against: [:name],
    additional_attributes: ->(record) { { label: record.name } },
  )

  pg_search_scope(
    :search,
    against: [:name],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  slug :name

  tracked
  resourcify

  attribute :default_currency, default: -> { MoneyRails.default_currency }

  has_many :users, through: :roles, class_name: :User, source: :users
  has_one :ldap, dependent: :destroy

  # Reverse polymorphic relationships. Allows searching related models through Ownable interface
  # 	Company.items, Company.contracts, etc.
  has_many :ownerships, dependent: :restrict_with_error
  {
    assets: "Asset",
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
    categories: "Category",
    smtps: "Smtp",
    person_groups: "PersonGroup",
    documentations: "Documentation",
    tickets: "Ticket",
  }.each_pair do |assoc, model|
    has_many assoc, through: :ownerships, source: :ownable, source_type: model
  end

  {
    items: "Item",
    accessories: "Accessory",
    consumables: "Consumable",
    components: "Component",
  }.each_pair do |assoc, model|
    has_many assoc, ->{ where(type: model) }, through: :ownerships, source: :ownable, source_type: :Asset, class_name: model.to_s
  end

  scope :includes_associated, -> { includes([:departments, :locations, :ownerships, :documentations]) }

  validates :name, presence: true

  private

  def safely_orphan_or_destroy_dependencies
    self.transaction do
      self.assets.destroy_all
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
      self.smtps.destroy_all
    end
  end

end
