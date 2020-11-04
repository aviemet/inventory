class Manufacturer < ApplicationRecord
  include Contactable

  validates_presence_of :name

  def self.dropdown_display
    "name"
  end
end
