class Tickets::EditSerializer < ApplicationSerializer
  object_as :ticket

  attributes :subject,
             :description,
             :primary_contact_id,
             :asset_id

  has_many :assignments, serializer: TicketAssignmentSerializer
end
