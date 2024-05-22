class Tickets::FormDataSerializer < TicketSerializer
  has_many :assignments, serializer: TicketAssignments::FormDataSerializer, optional: true
  has_many :assignees, serializer: PersonSerializer, optional: true

  belongs_to :status, serializer: TicketStatuses::FormDataSerializer, optional: true
  belongs_to :asset, serializer: Assets::OptionsSerializer, optional: true
end
