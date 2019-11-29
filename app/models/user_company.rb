class UserCompany < ApplicationRecord
  belongs_to :user
  belongs_to :company
  belongs_to :role
end
