class UserCompany < ApplicationRecord
  belongs_to :user
  belongs_to :company
  belongs_to :role

  before_validation :set_user_as_company_owner

  private

  # TODO: This is a good candidate to be moved out of the base model
  def set_user_as_company_owner
    self.role = Role.find_by_name(:OWNER) unless self.role
  end
end
