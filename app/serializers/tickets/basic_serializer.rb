class Tickets::BasicSerializer < TicketSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  belongs_to :status, serializer: TicketStatusSerializer
end
