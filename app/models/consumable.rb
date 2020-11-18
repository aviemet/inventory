class Consumable < ApplicationRecord
  belongs_to :manufacturer
  belongs_to :consumable_category
  belongs_to :vendor
  belongs_to :default_location, class_name: "Location", required: false

  def self.dropdown_display
    "name"
  end
end
