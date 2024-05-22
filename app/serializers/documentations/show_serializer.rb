class Documentations::ShowSerializer < DocumentationSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )

  belongs_to :created_by, serializer: People::BasicSerializer
end
