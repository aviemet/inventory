class SearchSerializer < ApplicationSerializer
  object_as :search

  attributes(
    :id,
    :content,
    :searchable_type,
    :searchable_id,
    :created_at,
    :updated_at,
  )
end
