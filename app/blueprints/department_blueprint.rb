class DepartmentBlueprint < ApplicationBlueprint
  fields :name,
         :slug,
         :location_id,
         :created_at,
         :updated_at
        # TODO: Not sure how to manage/track dept managers
        #  :manager_id

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
    association :activity, blueprint: ActivityBlueprint
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

  view :index do
    include_view :counts

    association :items, blueprint: ItemBlueprint
    association :accessories, blueprint: AccessoryBlueprint
    association :components, blueprint: ComponentBlueprint
    association :consumables, blueprint: ConsumableBlueprint
    association :licenses, blueprint: LicenseBlueprint
    association :people, blueprint: PersonBlueprint
  end

  view :show do
    association :location, blueprint: LocationBlueprint

    include_view :counts
  end
end
