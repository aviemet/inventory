class StatusLabels::ShowSerializer < StatusLabelSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )
end
