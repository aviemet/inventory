class CompanyDepartment < ApplicationRecord
  belongs_to :company
  belongs_to :department
end
