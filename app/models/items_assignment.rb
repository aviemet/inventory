class ItemsAssignment < ApplicationRecord
  belongs_to :item
  belongs_to :person
  belongs_to :department
end
