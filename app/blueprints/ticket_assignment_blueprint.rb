class TicketAssignmentBlueprint < ApplicationBlueprint
  fields :person_id,
         :ticket_id,
         :created_at,
         :updated_at

  view :associations do
    association :person, blueprint: PersonBlueprint
    association :ticket, blueprint: TicketBlueprint
  end

  view :as_options do
    only :id, :person_id
  end

  view :edit do
    include_view :edit
  end

  view :new do
    include_view :new
  end
end
