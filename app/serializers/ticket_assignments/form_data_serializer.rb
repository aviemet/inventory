class TicketAssignments::FormDataSerializer < TicketAssignmentSerializer
  belongs_to :person, serializer: PersonSerializer, optional: true
  belongs_to :ticket, serializer: TicketSerializer, optional: true
end
