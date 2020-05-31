class Ownership < ApplicationRecord
  belongs_to :company
  belongs_to :department
  belongs_to :ownable, polymorphic: true
end
