class Ownership < ApplicationRecord
  audited

  belongs_to :company
  belongs_to :department, optional: true
  belongs_to :ownable, polymorphic: true
end
