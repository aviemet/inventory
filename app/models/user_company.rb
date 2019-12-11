class UserCompany < ApplicationRecord
  belongs_to :user
  belongs_to :company
  belongs_to :role

  before_validation :set_user_as_owner

  def set_user_as_owner
    if self.new_record? && !self.role
      self.role = Role.find_by_name(:OWNER)
    end
  end
end
