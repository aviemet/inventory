class WebsiteBlueprint < ApplicationBlueprint
  fields :url,
         :name,
         :notes,
         :contact_id,
         :created_at,
         :updated_at

  view :associations do
    association :activities, blueprint: ActivityBlueprint
  end
end
