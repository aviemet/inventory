class Consumable < ApplicationRecord
  include Ownable

  monetize :cost_cents

  belongs_to :manufacturer
  belongs_to :category
  belongs_to :vendor
  belongs_to :default_location, class_name: "Location", required: false
end
