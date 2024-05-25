class Tickets::SpotlightSerializer < ApplicationSerializer
  object_as :ticket

  attributes(
    :subject,
    :description,
    :priority,
    :number,
    :primary_contact_id,
    :created_by_id,
    :asset_id,
    :status_id,
    id: { type: :string },
  )

  belongs_to :primary_contact, serializer: People::BasicSerializer
end
