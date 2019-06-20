class Location < ApplicationRecord
  has_one :contact
  belongs_to :company
end
