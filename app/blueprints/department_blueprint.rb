class DepartmentBlueprint < ApplicationBlueprint
  fields :name,
         :slug,
         :location_id,
         :created_at,
         :updated_at,
         :manager_id

  view :counts do
    field :counts do |department|
      {
        items: department&.items&.size || 0,
        accessories: department&.accessories&.size || 0,
        consumables: department&.consumables&.size || 0,
        components: department&.components&.size || 0,
        licenses: department&.licenses&.size || 0,
        contracts: department&.contracts&.size || 0,
        people: department&.people&.size || 0,
      }
    end
  end

  view :associations do
    association :audits, blueprint: AuditBlueprint
    association :items, blueprint: ItemBlueprint
    association :accessories, blueprint: AccessoryBlueprint
    association :components, blueprint: ComponentBlueprint
    association :consumables, blueprint: ConsumableBlueprint
    association :licenses, blueprint: LicenseBlueprint
    association :people, blueprint: PersonBlueprint
  end

  view :as_options do
    only :id, :name
  end

  view :show_page do
    field :items_count do |department|
      department.items.size
    end

    field :accessories_count do |department|
      department.accessories.size
    end

    field :consumables_count do |department|
      department.consumables.size
    end

    field :components_count do |department|
      department.components.size
    end

    field :licenses_count do |department|
      department.licenses.size
    end

    field :people_count do |department|
      department.people.size
    end
  end
end
