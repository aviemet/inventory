class EmailBlueprint < ApplicationBlueprint
  fields :email,
         :notes,
         :contact_id,
         :category_id,
         :created_at,
         :updated_at

  view :associations do
    association :contact, blueprint: ContactBlueprint
    association :category, blueprint: CategoryBlueprint
  end
end
