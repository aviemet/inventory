class Location < ApplicationRecord
  include Contactable

  belongs_to :company
  has_many :departments
  belongs_to :parent, class_name: 'Location', optional: true
end
