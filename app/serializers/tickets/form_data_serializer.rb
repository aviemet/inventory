class Tickets::FormDataSerializer < ApplicationSerializer
  object_as :ticket

  attributes(
    :subject,
    :number,
    :description,
    :primary_contact_id,
    :asset_id,
  )

  has_many :assignments, serializer: TicketAssignments::FormDataSerializer
  has_many :assignees, serializer: PersonSerializer
  belongs_to :status, serializer: TicketStatuses::FormDataSerializer
  belongs_to :asset, serializer: Assets::OptionsSerializer, optional: true
end
