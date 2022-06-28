class Item < ApplicationRecord
  include Ownable
  include Assignable::Single
  include AssignToable
  include Purchasable
  include Fieldable
  include PgSearch::Model


  pg_search_scope(
    :search,
    against: [:name, :asset_tag, :serial, :cost_cents], associated_against: {
      model: [:name, :model_number],
      vendor: [:name],
      default_location: [:name],
      category: [:name],
      manufacturer: [:name]
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    }
  )

  resourcify
  audited

  monetize :cost_cents, allow_nil: true

  validates_presence_of :name

  has_many :nics
  has_many :ips, -> { where(active: true) }, through: :nics, source: :ip_leases
  has_many :ip_leases, through: :nics
  belongs_to :model
  belongs_to :vendor, required: false
  belongs_to :default_location, class_name: "Location", required: false
  has_one :category, through: :model
  has_one :manufacturer, through: :model
  has_one :warranty, required: false

  accepts_nested_attributes_for :nics # , reject_if: ->(attributes){ attributes[:ip].blank? && attributes[:mac].blank? }, allow_destroy: true

  scope :no_nics, -> { includes(:nics).where(nics: { id: nil }) }

  scope :includes_associated, -> { includes([:category, :model, :assignments, :department, :vendor, :manufacturer, :audits]) }

  # Update Item name if changed during assignment
  # def before_assignment(_, params)
  #   name = params&.[](:assignment)&.[](:item)&.[](:name)
  #   self.update(name: name) unless name.nil?
  # end

end
