class TicketAssignmentSerializer < ApplicationSerializer
  object_as :ticket_assignment

  attributes(
    :person_id,
    :ticket_id,
    :created_at,
    :updated_at,
  )
end
