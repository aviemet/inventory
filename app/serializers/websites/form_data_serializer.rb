class Websites::FormDataSerializer < ApplicationSerializer
  object_as :website

  attributes(
    :id,
    :url,
    :name,
    :notes,
    :contact_id,
    :created_at,
    :updated_at,
  )
end
