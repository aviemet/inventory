class TicketMessageSerializer < ApplicationSerializer
  object_as :ticket_message

  attributes :body,
             :created_by_id,
             :parent_id,
             :ticket_id,
             :created_at,
             :updated_at

  belongs_to :created_by, serializer: PersonSerializer
end
