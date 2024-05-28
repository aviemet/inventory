class Documentations::BasicSerializer < DocumentationSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )
end
