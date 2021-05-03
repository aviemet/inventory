class Manufacturer < ApplicationRecord
  include Ownable
  include Contactable

  slug :name

  audited

  validates :name, presence: true
  validates :name, uniqueness: true
end
