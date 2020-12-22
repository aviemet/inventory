class Item < ApplicationRecord
  include Ownable
  include Assignable
  include AssignToable
  include Purchasable
  include Fieldable

  resourcify

  monetize :cost_cents

  has_many :nics
  has_many :ips, -> { where(active: true) }, through: :nics, source: :ips
  belongs_to :model
  belongs_to :vendor, required: false
  belongs_to :default_location, class_name: "Location", required: false
  belongs_to :parent, class_name: "Item", required: false
  has_one :category, through: :model
  has_one :manufacturer, through: :model
  has_one :warranty, required: false

  scope :includes_associated, ->{ includes([:category, :model, :assignments, :department, :vendor, :manufacturer]) }

  searchable do
    text :title, :asset_tag, :serial, :notes
    double :cost
  end

  def self.dropdown_display
    "title"
  end
end
