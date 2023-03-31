class Role < ApplicationRecord
  tracked
  scopify # Rolify scopes

  has_and_belongs_to_many :users, join_table: :users_roles
  has_and_belongs_to_many :people, join_table: :people_roles
  has_and_belongs_to_many :person_groups, join_table: :person_groups_roles

  belongs_to :resource, polymorphic: true, optional: true

  validates :resource_type,
            inclusion: { in: Rolify.resource_types },
            allow_nil: true

end
