class Consumable < ApplicationRecord
  include Ownable

  belongs_to :manufacturer
  belongs_to :category
  belongs_to :vendor
  belongs_to :default_location, class_name: "Location", required: false

  def self.dropdown_display
    "name"
  end
end
