class Accessory < ApplicationRecord
  include Ownable
  include Assignable

  monetize :cost_cents

  belongs_to :category
  belongs_to :vendor
  belongs_to :manufacturer
  belongs_to :default_location, class_name: "Location", required: false
end
