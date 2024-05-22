class Documentations::IndexSerializer < DocumentationSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )

  belongs_to :created_by, serializer: PersonSerializer
end
