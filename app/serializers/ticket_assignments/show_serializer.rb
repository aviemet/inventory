class TicketAssignments::ShowSerializer < ApplicationSerializer
  object_as :ticket_assignment

  attributes :person_id,
             :ticket_id,
             :created_at,
             :updated_at

  belongs_to :person, serializer: PersonSerializer
  belongs_to :ticket, serializer: TicketSerializer
end
