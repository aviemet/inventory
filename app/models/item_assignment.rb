class ItemAssignment < ApplicationRecord
  belongs_to :item
  belongs_to :person
end
