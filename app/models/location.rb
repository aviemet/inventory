class Location < ApplicationRecord
  include Contactable
  belongs_to :company
end
