class Item < ApplicationRecord
  include Ownable
  include Assignable
  include Purchasable
  include Fieldable

  resourcify

  has_many :nics
  belongs_to :model
  belongs_to :vendor, required: false
  belongs_to :default_location, class_name: "Location", required: false
  belongs_to :parent, class_name: "Item", required: false
  has_one :item_category, through: :model
  has_one :warranty, required: false

  def self.dropdown_display
    "title"
  end
end
