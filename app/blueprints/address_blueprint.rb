class AddressBlueprint < ApplicationBlueprint
  fields :address,
         :address_2,
         :city,
         :region,
         :country,
         :postal,
         :notes,
         :contact_id,
         :category_id,
         :created_at,
         :updated_at

  view :associations do
    association :audits, blueprint: AuditBlueprint
    association :contact, blueprint: ContactBlueprint
    association :category, blueprint: CategoryBlueprint
  end
end
