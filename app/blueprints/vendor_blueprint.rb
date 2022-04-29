class VendorBlueprint < ApplicationBlueprint
  identifier :slug

  fields :id,
         :name,
         :url,
         :created_at,
         :updated_at

  view :associations do
    association :contact, blueprint: ContactBlueprint
    association :audits, blueprint: AuditBlueprint
    association :contracts, blueprint: ContractBlueprint
    association :items, blueprint: ItemBlueprint
    association :accessories, blueprint: AccessoryBlueprint
    association :consumables, blueprint: ConsumableBlueprint
    association :components, blueprint: ComponentBlueprint
  end

  view :show_page do
    field :items_count do |vendor|
      vendor.items.count
    end

    field :accessories_count do |vendor|
      vendor.accessories.count
    end

    field :consumables_count do |vendor|
      vendor.consumables.count
    end

    field :components_count do |vendor|
      vendor.components.count
    end

    association :contact, blueprint: ContactBlueprint
    association :contracts, blueprint: ContractBlueprint
  end

  view :as_options do
    fields :id, :name
  end

end
