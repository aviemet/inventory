class TicketStatuses::EditSerializer < ApplicationSerializer
  object_as :ticket_status

  attribute :name
end
