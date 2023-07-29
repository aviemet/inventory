class Tickets::EditSerializer < ApplicationSerializer
  object_as :ticket

  attributes(
    :id,
    :subject,
    :number,
    :description,
    :primary_contact_id,
    :asset_id,
  )

  has_many :assignments, serializer: TicketAssignments::EditSerializer
  has_many :assignees, serializer: People::OptionsSerializer
  belongs_to :status, serializer: TicketStatuses::FormDataSerializer
  belongs_to :asset, serializer: Assets::OptionsSerializer
end
