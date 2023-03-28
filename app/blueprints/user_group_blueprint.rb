class UserGroupBlueprint < ApplicationBlueprint
  identifier :slug

  fields :id,
         :name,
         :description,
         :created_at,
         :updated_at

  view :associations do
    association :users, blueprint: UserBlueprint
  end

  view :as_options do
    only :id, :name
  end

  view :new do
    exclude :slug
  end

end
