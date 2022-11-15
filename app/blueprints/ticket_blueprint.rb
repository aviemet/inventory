class TicketBlueprint < ApplicationBlueprint
  fields :subject,
         :description,
         :primary_contact_id,
         :created_at,
         :updated_at

<<<<<<< HEAD
  view :associations do
    association :messages, blueprint: TicketMessageBlueprint 
    association :created_by, blueprint: PersonBlueprint
    association :primary_contact, blueprint: PersonBlueprint
    association :assignees, blueprint: PersonBlueprint
    association :status, blueprint: TicketStatusBlueprint
  end
=======
  association :created_by, blueprint: PersonBlueprint
  association :primary_contact, blueprint: PersonBlueprint
  association :assignees, blueprint: PersonBlueprint
  association :status, blueprint: TicketStatusBlueprint
  association :messages, blueprint: TicketMessageBlueprint
>>>>>>> dad5450c (Adds messagse to ticket show page)

  view :as_options do
    only :id, :subject
  end

  view :edit do
    include_view :edit

    exclude :created_by
  end

  view :new do
    include_view :new

    association :assignments, blueprint: TicketAssignmentBlueprint

    # association :status, blueprint: TicketStatusBlueprint, view: :new

    excludes :created_by
  end
end
