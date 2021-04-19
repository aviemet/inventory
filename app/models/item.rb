class Item < ApplicationRecord
  include Ownable
  include Assignable
  include AssignToable
  include Purchasable
  include Fieldable

  resourcify

  validates_presence_of :name

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

  accepts_nested_attributes_for :nics, reject_if: ->(attributes){ attributes[:ip].blank? && attributes[:mac].blank? }, allow_destroy: true

  scope :includes_associated, ->{ includes([:category, :model, :assignments, :department, :vendor, :manufacturer]) }

  searchable do
    text :name
    string(:sort_name) { self.name }

    text :asset_tag
    string(:sort_asset_tag) { self.asset_tag }

    text :serial
    string(:sort_serial) { self.serial }

    text :notes
    string(:sort_notes) { self.notes }

    integer :cost do
      self.cost_cents
    end
    string(:sort_cost) { self.cost_cents }

    text :model do
      model.name if self.model
    end
    string(:sort_model) { self.model&.name }

    text :department do
      department.name if self.department
    end
    string(:sort_department) { self.department&.name }

    text :manufacturer do
      manufacturer.name if self.manufacturer
    end
    string(:sort_manufacturer) { self.manufacturer&.name }

    text :vendor do
      vendor.name if self.vendor
    end
    string(:sort_vendor) { self.vendor&.name }

    text :category do
      category.name if self.category
    end
    string(:sort_category) { self.category&.name }
  end
end
