class Ownership < ApplicationRecord
  tracked
  resourcify

  belongs_to :company
  belongs_to :department, optional: true
  belongs_to :ownable, polymorphic: true
end
