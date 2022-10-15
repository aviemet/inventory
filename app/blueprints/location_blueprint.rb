class LocationBlueprint < ApplicationBlueprint
  identifier :slug

  fields :name,
         :parent_id,
         :currency,
         :created_at,
         :updated_at

  view :counts do
    field :counts do |loc|
      {
        items: loc&.items&.size || 0,
        accessories: loc&.accessories&.size || 0,
        consumables: loc&.consumables&.size || 0,
        components: loc&.components&.size || 0,
        licenses: loc&.licenses&.size || 0,
        people: loc&.people&.size || 0,
      }
    end
  end

  view :associations do
    association :parent, blueprint: LocationBlueprint
    association :contact, blueprint: ContactBlueprint
    association :audits, blueprint: AuditBlueprint
    association :department, blueprint: DepartmentBlueprint
    association :location, blueprint: LocationBlueprint
  end

  view :index do
    include_view :counts

    association :parent, blueprint: LocationBlueprint
    association :contact, blueprint: ContactBlueprint
    association :department, blueprint: DepartmentBlueprint
    association :location, blueprint: LocationBlueprint
  end

  view :show do
    association :parent, blueprint: LocationBlueprint
    association :contact, blueprint: ContactBlueprint
    association :audits, blueprint: AuditBlueprint
    association :department, blueprint: DepartmentBlueprint
    association :location, blueprint: LocationBlueprint
  end

  view :as_options do
    only :id, :name
  end
end
