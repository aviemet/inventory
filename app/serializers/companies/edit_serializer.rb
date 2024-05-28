class Companies::EditSerializer < Companies::FormDataSerializer
  attributes(
    :id,
    :slug,
  )
end
