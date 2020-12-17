class Manufacturer < ApplicationRecord
  include Ownable
  include Contactable

  slug :name

  validates :name, presence: true
  validates :name, uniqueness: true

  def self.dropdown_display
    "name"
  end
end
