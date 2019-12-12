class Location < ApplicationRecord
  include Contactable
  
  belongs_to :company
  has_many :departments
end
