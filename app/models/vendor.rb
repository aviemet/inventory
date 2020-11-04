class Vendor < ApplicationRecord
  include Contactable
  include Ownable

  has_many :contracts

  def self.dropdown_display
    "name"
  end
end
