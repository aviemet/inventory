class Location < ApplicationRecord
  include Contactable
  include Ownable
  include Assignable

  resourcify
  belongs_to :parent, class_name: "Location", required: false
end
