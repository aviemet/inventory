class Manufacturer < ApplicationRecord
  include Ownable
  include Contactable

  validates_presence_of :name

  def self.dropdown_display
    "name"
  end
end
