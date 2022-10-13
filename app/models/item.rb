class Item < ApplicationRecord
  include Ownable
  include Assignable::Single
  include AssignToable
  include Purchasable
  include Fieldable
  include PgSearch::Model

  after_create :ensure_nic

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
  belongs_to :vendor, required: false
  belongs_to :default_location, class_name: "Location", required: false
  belongs_to :model
  has_one :category, through: :model
  has_one :manufacturer, through: :model
  has_one :warranty, required: false

  accepts_nested_attributes_for :nics # , reject_if: ->(attributes){ attributes[:ip].blank? && attributes[:mac].blank? }, allow_destroy: true

  scope :no_nics, -> { includes(:nics).where(nics: { id: nil }) }

  scope :includes_associated, -> { includes([:category, :model, :assignments, :default_location, :department, :vendor, :manufacturer, :status_type, :audits]) }

  def location
    if assigned?
      assignment.location
    else
      self.default_location
    end
  end

  def self.find_by_category(category)
    self.includes(:model, :category).where('model.category' => category)
  end

  private

  def ensure_nic
    self << Nic.new if self.nics.empty?
  end

end
