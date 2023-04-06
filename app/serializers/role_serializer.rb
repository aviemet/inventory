class RoleSerializer < ApplicationSerializer
  object_as :role

  attributes :name,
             :resource_type,
             :resource_id,
             :created_at,
             :updated_at

  has_many :activities, serializer: ActivitySerializer
  has_many :users, serializer: UserSerializer
  has_many :user_groups, serializer: UserGroupsSerializer
  has_many :people, serializer: PeopleSerializer
end
