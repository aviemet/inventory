class License < ApplicationRecord
  include Ownable
  include Assignable::Consume
  include Purchasable
  include Fieldable

  resourcify

  monetize :cost_cents

  belongs_to :category
  belongs_to :vendor
  belongs_to :manufacturer

  validates_presence_of :name

  alias_attribute :qty, :seats

  # Sunspot search #

  def self.associated_models
    [:category, :assignments, :department, :vendor, :manufacturer]
  end

  def self.highlight_fields
    [:name, :key, :licenser_name, :licenser_email, :notes, :category, :department, :vendor, :manufacturer]
  end

  searchable do
    text :name, stored: true
    string(:sort_name) { self.name&.downcase }

    text :key, stored: true
    string(:sort_key) { self.key&.downcase }

    text :licenser_name, stored: true
    string(:sort_licenser_name) { self.licenser_name&.downcase }

    text :licenser_email, stored: true
    string(:sort_licenser_email) { self.licenser_email&.downcase }

    time :purchased_at, stored: true
    string(:purchased_at) { self.purchased_at }

    time :expires_at, stored: true
    string(:expires_at) { self.expires_at }

    time :terminates_at, stored: true
    string(:terminates_at) { self.terminates_at }

    integer :cost_cents, stored: true
    string(:sort_cost_cents) { self.cost_cents }

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
