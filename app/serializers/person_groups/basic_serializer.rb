class PersonGroups::BasicSerializer < PersonGroupSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )
end
