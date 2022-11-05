class RoleBlueprint < ApplicationBlueprint
  fields :name,
         :resource_type,
         :resource_id,
         :created_at,
         :updated_at

  view :associations do
    association :activities, blueprint: ActivityBlueprint
    association :users, blueprint: UserBlueprint
  end
end
