class TicketStatusSerializer < ApplicationSerializer
  object_as :ticket_status

  attributes :name,
             :created_at,
             :updated_at

  # view :new do
  #   only :id, :name
  # end
end
