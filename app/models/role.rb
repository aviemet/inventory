class Role < ApplicationRecord
  tracked

  has_and_belongs_to_many :users, join_table: :users_roles
  has_and_belongs_to_many :user_groups, join_table: :user_groups_roles

  belongs_to :resource,
             polymorphic: true,
             optional: true

  validates :resource_type,
            inclusion: { in: Rolify.resource_types },
            allow_nil: true

  scopify
end
