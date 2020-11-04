class Location < ApplicationRecord
  include Contactable
  include Ownable
  include AssignToable

  resourcify
  
  belongs_to :parent, class_name: "Location", required: false
  
  validates_presence_of :name

  def self.dropdown_display
    "name"
  end
end
