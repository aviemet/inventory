class StatusLabels::BasicSerializer < StatusLabels::ShowSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )
end
