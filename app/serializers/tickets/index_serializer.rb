class Tickets::IndexSerializer < TicketSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_many :messages, serializer: TicketMessageSerializer
  has_many :assignees, serializer: PersonSerializer

  belongs_to :created_by, serializer: PersonSerializer
  belongs_to :primary_contact, serializer: PersonSerializer
  belongs_to :asset, serializer: AssetSerializer
  belongs_to :status, serializer: TicketStatusSerializer
end
