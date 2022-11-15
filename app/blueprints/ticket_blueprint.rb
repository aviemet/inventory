class TicketBlueprint < ApplicationBlueprint
  fields :subject,
         :description,
         :status,
         :created_at,
         :updated_at

  association :created_by, blueprint: PersonBlueprint
  association :primary_contact, blueprint: PersonBlueprint
  association :assignees, blueprint: PersonBlueprint

  view :as_options do
    only :id, :subject
  end

  view :edit do
    include_view :edit

    exclude :created_by
  end

  view :new do
    include_view :new

    exclude :created_by
  end
end