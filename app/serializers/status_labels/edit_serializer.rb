class StatusLabels::EditSerializer < StatusLabels::FormDataSerializer
  attributes(
    :id,
    :slug,
  )
end
