class Manufacturer < ApplicationRecord
  include Contactable

  validates_presence_of :name
end
