class TicketSerializer < ApplicationSerializer
  object_as :ticket

  attributes(
    :subject,
    :description,
    :primary_contact_id,
    :asset_id,
    :created_at,
    :updated_at,
  )
end
