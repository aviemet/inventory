class Tickets::FormDataSerializer < ApplicationSerializer
  object_as :ticket

  attributes(
     :subject,
     :description,
     :primary_contact_id,
     :asset_id,
   )

  has_many :assignments, serializer: TicketAssignments::FormDataSerializer
  belongs_to :status, serializer: TicketStatuses::FormDataSerializer
end
