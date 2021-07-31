class Accessory < ApplicationRecord
  include Ownable
  include Assignable::Quantity
  include Purchasable
  include Fieldable

  resourcify
  audited

  monetize :cost_cents

  belongs_to :category
  belongs_to :vendor
  belongs_to :manufacturer
  belongs_to :default_location, class_name: "Location", required: false

  # Sunspot search #

  def self.associated_models
    [:category, :assignments, :department, :vendor, :manufacturer]
  end
end
