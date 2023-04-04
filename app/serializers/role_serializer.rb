class RoleSerializer < ApplicationSerializer
  attributes :name,
             :resource_type,
             :resource_id,
             :created_at,
             :updated_at

  # view :associations do
  #   association :activities, serializer: ActivitySerializer
  #   association :users, serializer: UserSerializer
  # end
end
