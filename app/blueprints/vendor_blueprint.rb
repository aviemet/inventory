class VendorBlueprint < ApplicationBlueprint
  identifier :slug

  fields :id,
         :name,
         :url,
         :created_at,
         :updated_at

  view :associations do
    association :contact, blueprint: ContactBlueprint
    association :activities, blueprint: ActivityBlueprint
    association :contracts, blueprint: ContractBlueprint
    association :items, blueprint: ItemBlueprint
    association :accessories, blueprint: AccessoryBlueprint
    association :consumables, blueprint: ConsumableBlueprint
    association :components, blueprint: ComponentBlueprint
  end

  view :as_options do
    only :id, :name
  end

  view :show_page do
    field :items_count do |vendor|
      vendor.items.size
    end

    field :accessories_count do |vendor|
      vendor.accessories.size
    end

    field :consumables_count do |vendor|
      vendor.consumables.size
    end

    field :components_count do |vendor|
      vendor.components.size
    end

    field :licenses_count do |vendor|
      vendor.licenses.size
    end

    field :contracts_count do |vendor|
      vendor.contracts.size
    end

    association :contact, blueprint: ContactBlueprint
    association :contracts, blueprint: ContractBlueprint
  end

end
