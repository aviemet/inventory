class Accessory < ApplicationRecord
  belongs_to :vendor
  belongs_to :default_location
  belongs_to :accessory_category
end
