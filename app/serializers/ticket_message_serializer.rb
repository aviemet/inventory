# == Schema Information
#
# Table name: ticket_messages
#
#  id            :bigint           not null, primary key
#  body          :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  created_by_id :bigint
#  parent_id     :bigint
#  ticket_id     :bigint           not null
#
# Indexes
#
#  index_ticket_messages_on_created_by_id  (created_by_id)
#  index_ticket_messages_on_parent_id      (parent_id)
#  index_ticket_messages_on_ticket_id      (ticket_id)
#
# Foreign Keys
#
#  fk_rails_...  (created_by_id => people.id)
#  fk_rails_...  (parent_id => ticket_messages.id)
#  fk_rails_...  (ticket_id => tickets.id)
#
class TicketMessageSerializer < ApplicationSerializer
  object_as :ticket_message

  attributes(
    :body,
    :created_by_id,
    :parent_id,
    :ticket_id,
    :created_at,
    :updated_at,
  )

  belongs_to :created_by, serializer: PersonSerializer
end
