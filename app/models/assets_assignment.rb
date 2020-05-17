class AssetsAssignment < ApplicationRecord
  belongs_to :asset
  belongs_to :person
  belongs_to :department
end
