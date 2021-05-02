class Item < ApplicationRecord
  include Ownable
  include Assignable
  include AssignToable
  include Purchasable
  include Fieldable

  resourcify

  monetize :cost_cents

  validates_presence_of :name

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

  def asset_with_quantity?; false; end

  def before_assignment(params)
    asset_class = params[:asset_type].downcase
    self.update(name: params[:assignment][asset_class][:name])
  end

  # Sunspot search #

  def self.associated_models
    [:category, :model, :assignments, :department, :vendor, :manufacturer]
  end

  def self.highlight_fields
    [:name, :asset_tag, :serial, :notes, :category, :model, :department, :vendor, :manufacturer]
  end

  searchable do
    text :name, stored: true
    string(:sort_name) { self.name&.downcase }

    text :asset_tag, stored: true
    string(:sort_asset_tag) { self.asset_tag&.downcase }

    text :serial, stored: true
    string(:sort_serial) { self.serial&.downcase }

    text :notes, stored: true
    string(:sort_notes) { self.notes&.downcase }

    integer :cost_cents, stored: true
    string(:sort_cost_cents) { self.cost_cents }

    text :model, stored: true do
      model.name if self.model
    end
    string(:sort_model) { self.model&.name&.downcase }

    text :department, stored: true do
      department.name if self.department
    end
    string(:sort_department) { self.department&.name&.downcase }

    text :manufacturer, stored: true do
      manufacturer.name if self.manufacturer
    end
    string(:sort_manufacturer) { self.manufacturer&.name&.downcase }

    text :vendor, stored: true do
      vendor.name if self.vendor
    end
    string(:sort_vendor) { self.vendor&.name&.downcase }

    text :category, stored: true do
      category.name if self.category
    end
    string(:sort_category) { self.category&.name&.downcase }
  end
end
