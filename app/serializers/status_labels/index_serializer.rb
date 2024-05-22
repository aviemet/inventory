class StatusLabels::IndexSerializer < StatusLabelSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )
end
