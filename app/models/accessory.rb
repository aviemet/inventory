class Accessory < ApplicationRecord
  include Ownable
  include Assignable::Quantity
  include Purchasable
  include Fieldable

  resourcify

  monetize :cost_cents

  belongs_to :category
  belongs_to :vendor
  belongs_to :manufacturer
  belongs_to :default_location, class_name: "Location", required: false

  scope :includes_associated, ->{ includes([:category, :assignments, :department, :vendor, :manufacturer]) }
end
