class Location < ApplicationRecord
  include Contactable
  include Ownable

  resourcify
  belongs_to :parent, class_name: "Location", required: false
end
