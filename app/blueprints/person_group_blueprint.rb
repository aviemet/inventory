class PersonGroupBlueprint < ApplicationBlueprint
  identifier :slug

  fields :id,
         :name,
         :description,
         :created_at,
         :updated_at

  view :associations do
    association :people, blueprint: PersonBlueprint
  end

  view :as_options do
    only :id, :name
  end

  view :new do
    exclude :slug
  end

  view :edit do
    field :permissions do |person_group|
      person_group.roles.each_with_object({}) do |role, h|
        h[role.resource_type.downcase] ||= {}
        h[role.resource_type.downcase][role.name] = true
      end
    end
  end

end
