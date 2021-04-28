class Consumable < ApplicationRecord
  include Ownable

  monetize :cost_cents

  belongs_to :manufacturer
  belongs_to :category
  belongs_to :vendor
  belongs_to :default_location, class_name: "Location", required: false

  # Sunspot search #

  def self.associated_models
    [:manufacturer, :category, :vendor]
  end

  def self.highlight_fields
    [:name, :model_number, :manufacturer, :category, :vendor]
  end

  searchable do
    text :name, stored: true
    string(:sort_name) { self.name&.downcase }

    text :model_number, stored: true
    string(:sort_model_number) { self.model_number&.downcase }

    integer :min_qty, stored: true
    string(:sort_min_qty) { self.min_qty }

    integer :qty, stored: true
    string(:sort_qty) { self.qty }

    text :notes, stored: true
    string(:sort_notes) { self.notes&.downcase }

    integer :cost_cents, stored: true
    string(:sort_cost_cents) { self.cost_cents }

    text :manufacturer, stored: true do
      manufacturer.name if self.manufacturer
    end
    string(:sort_manufacturer) { self.manufacturer&.name&.downcase }

    text :category, stored: true do
      category.name if self.category
    end
    string(:sort_category) { self.category&.name&.downcase }

    text :vendor, stored: true do
      vendor.name if self.vendor
    end
    string(:sort_vendor) { self.vendor&.name&.downcase }

  end
end
