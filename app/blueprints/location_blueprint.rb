class LocationBlueprint < ApplicationBlueprint
  identifier :slug

  fields :name,
         :parent_id,
         :currency,
         :created_at,
         :updated_at

  view :counts do
    include_view :associations
    field :counts do |location|
      {
        items: location&.items&.size || 0,
        accessories: location&.accessories&.size || 0,
        consumables: location&.consumables&.size || 0,
        components: location&.components&.size || 0,
        licenses: location&.licenses&.size || 0,
        people: location&.people&.size || 0,
      }
    end
  end

  view :associations do
    association :parent, blueprint: LocationBlueprint
    association :contact, blueprint: ContactBlueprint
    association :audits, blueprint: AuditBlueprint
    association :department, blueprint: DepartmentBlueprint
  end

  view :as_options do
    excludes :slug,
             :parent_id,
             :currency,
             :created_at,
             :updated_at
  end
end
