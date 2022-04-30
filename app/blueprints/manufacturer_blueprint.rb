class ManufacturerBlueprint < ApplicationBlueprint
  identifier :slug

  fields :id,
         :name,
         :created_at,
         :updated_at

  view :associations do
		association :contact, blueprint: ContactBlueprint
		association :audits, blueprint: AuditBlueprint
		association :models, blueprint: ModelBlueprint
		association :items, blueprint: ItemBlueprint
		association :accessories, blueprint: AccessoryBlueprint
		association :consumables, blueprint: ConsumableBlueprint
		association :components, blueprint: ComponentBlueprint
  end
end
