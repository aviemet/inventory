class TicketBlueprint < ApplicationBlueprint
  fields :subject,
         :description,
         :created_at,
         :updated_at

  association :created_by, blueprint: PersonBlueprint

  view :as_options do
    only :id, :subject
  end
end