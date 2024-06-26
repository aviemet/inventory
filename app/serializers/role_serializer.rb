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
class RoleSerializer < ApplicationSerializer
  object_as :role

  attributes(
    :name,
    :resource_type,
    :resource_id,
    :created_at,
    :updated_at,
  )

  has_many :activities, serializer: ActivitySerializer
  has_many :people, serializer: PersonSerializer
  has_many :person_groups, serializer: PersonGroupSerializer
end
