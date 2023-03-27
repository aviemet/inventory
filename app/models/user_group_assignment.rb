class UserGroupAssignment < ApplicationRecord
  tracked
  resourcify

  belongs_to :user
  belongs_to :user_group
end
