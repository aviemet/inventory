class PersonGroups::EditSerializer < PersonGroups::FormDataSerializer
  attributes(
    :id,
    :slug,
  )
end
