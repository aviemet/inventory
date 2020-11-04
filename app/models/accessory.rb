class Accessory < ApplicationRecord
  include Ownable
  include Assignable
  
  belongs_to :vendor
  belongs_to :default_location
  belongs_to :accessory_category

  def self.dropdown_display
    "name"
  end
end
