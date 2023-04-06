class Tickets::ShowSerializer < ApplicationSerializer
  object_as :ticket

  attributes :subject,
             :description,
             :primary_contact_id,
             :asset_id,
             :created_at,
             :updated_at

  has_many :messages, serializer: TicketMessageSerializer
  belongs_to :created_by, serializer: PersonSerializer
  belongs_to :primary_contact, serializer: PersonSerializer
  belongs_to :asset, serializer: AssetSerializer
  has_many :assignees, serializer: PersonSerializer
  belongs_to :status, serializer: TicketStatusSerializer
end
