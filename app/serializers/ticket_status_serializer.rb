class TicketStatusSerializer < ApplicationSerializer
  attributes :name,
             :created_at,
             :updated_at

  # view :new do
  #   only :id, :name
  # end
end
