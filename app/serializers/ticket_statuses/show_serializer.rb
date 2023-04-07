class TicketStatuses::ShowSerializer < ApplicationSerializer
  object_as :ticket_status

  attributes(
     :name,
     :created_at,
     :updated_at,
   )
end
