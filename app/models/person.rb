class Person < ApplicationRecord
  include Contactable
  belongs_to :department, optional: true
  has_one :user
  has_many :items_assignments
  has_many :items, through: :items_assignments
end
