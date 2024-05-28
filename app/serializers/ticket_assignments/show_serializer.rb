class TicketAssignments::ShowSerializer < ApplicationSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  belongs_to :person, serializer: PersonSerializer
  belongs_to :ticket, serializer: TicketSerializer
end
