class Location < ApplicationRecord
  include Contactable
  include Ownable
  include AssignToable

  resourcify
  belongs_to :parent, class_name: "Location", required: false
end
