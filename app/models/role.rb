# == Schema Information
#
# Table name: roles
#
#  id            :bigint           not null, primary key
#  name          :string
#  resource_type :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  resource_id   :bigint
#
# Indexes
#
#  index_roles_on_name_and_resource_type_and_resource_id  (name,resource_type,resource_id)
#  index_roles_on_resource                                (resource_type,resource_id)
#
class Role < ApplicationRecord
  tracked
  scopify # Rolify scopes

  has_and_belongs_to_many :users, join_table: :users_roles # rubocop:disable Rails/HasAndBelongsToMany
  has_and_belongs_to_many :people, join_table: :people_roles # rubocop:disable Rails/HasAndBelongsToMany
  has_and_belongs_to_many :person_groups, join_table: :person_groups_roles # rubocop:disable Rails/HasAndBelongsToMany

  belongs_to :resource, polymorphic: true, optional: true

  validates :resource_type,
    inclusion: { in: Rolify.resource_types },
    allow_nil: true

end
