class Accessory < ApplicationRecord
  include Ownable
  include Assignable
  
  belongs_to :accessory_category
  belongs_to :vendor
  belongs_to :manufacturer
  belongs_to :default_location, class_name: "Location", required: false

  def self.dropdown_display
    "name"
  end
end
