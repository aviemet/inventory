class TicketStatuses::NewSerializer < ApplicationSerializer
  object_as :ticket_status

  attributes :name
end
