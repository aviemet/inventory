class Tickets::NewSerializer < ApplicationSerializer
  object_as :ticket

  attributes(
     :subject,
     :description,
     :primary_contact_id,
     :asset_id,
   )

  has_many :assignments, serializer: TicketAssignments::NewSerializer
  belongs_to :status, serializer: TicketStatuses::NewSerializer
end
