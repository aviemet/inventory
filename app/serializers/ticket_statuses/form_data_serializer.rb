class TicketStatuses::FormDataSerializer < ApplicationSerializer
  object_as :ticket_status

  attributes :name
end
