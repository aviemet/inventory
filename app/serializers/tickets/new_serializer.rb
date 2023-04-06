class Tickets::NewSerializer < ApplicationSerializer
  object_as :ticket

  attributes :subject,
             :description,
             :primary_contact_id,
             :asset_id

  has_many :assignments, serializer: TicketAssignmentSerializer
  belongs_to :status, serializer: TicketStatusSerializer, view: :new
end
