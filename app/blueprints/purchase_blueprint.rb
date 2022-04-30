class PurchaseBlueprint < ApplicationBlueprint
  fields :purchasable_type,
         :purchasable_id,
         :order_id,
         :cost,
         :cost_currency,
         :qty,
         :notes,
         :created_at,
         :updated_at

  view :associations do
    association :department, blueprint: DepartmentBlueprint
    association :audits, blueprint: AuditBlueprint
    association :item, blueprint: ItemBlueprint
    association :accessory, blueprint: AccessoryBlueprint
    association :component, blueprint: ComponentBlueprint
    association :consumable, blueprint: ConsumableBlueprint
    association :order, blueprint: OrderBlueprint
  end
end
