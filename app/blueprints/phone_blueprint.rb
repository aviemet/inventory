class PhoneBlueprint < ApplicationBlueprint
  fields :number,
         :extension,
         :notes,
         :contact_id,
         :category_id,
         :created_at,
         :updated_at

  view :associations do
    association :activity, blueprint: ActivityBlueprint
    association :contact, blueprint: ContactBlueprint
    association :category, blueprint: CategoryBlueprint
  end
end
