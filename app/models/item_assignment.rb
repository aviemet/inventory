class ItemAssignment < ApplicationRecord
  has_one :item
  has_one :person
end
