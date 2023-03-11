class UserGroup < ApplicationRecord
  include Ownable

  has_many :user_group_assignments
  has_many :users, through: :user_group_assignments

  def assign(user)
    UserGroupAssignment.create!({
      user:,
      user_group: self
    })
  end
end
