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
