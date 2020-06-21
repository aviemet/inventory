class Item < ApplicationRecord
  include Ownable
  include Purchasable
  include Fieldable

  has_many :nics
  belongs_to :model
  belongs_to :default_location, class_name: "Location", required: false
  belongs_to :parent, class_name: "Item", required: false
end
