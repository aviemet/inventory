class PersonGroups::ShowSerializer < PersonGroupSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )

  has_many :people, serializer: PersonSerializer
end
