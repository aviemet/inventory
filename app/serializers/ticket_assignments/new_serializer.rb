class TicketAssignments::NewSerializer < ApplicationSerializer
  object_as :ticket_assignment

  attributes :person_id, :ticket_id
end
