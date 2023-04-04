class TicketMessageSerializer < ApplicationSerializer
  attributes :body,
             :created_by_id,
             :parent_id,
             :ticket_id,
             :created_at,
             :updated_at

  # association :created_by, serializer: PersonSerializer
end
