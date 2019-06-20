class Person < ApplicationRecord
  belongs_to :user
  belongs_to :department
  belongs_to :contact
  has_many: items_assignments
  has_many: items, through: :items_assignments
end
