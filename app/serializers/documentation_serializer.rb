class DocumentationSerializer < ApplicationSerializer
  object_as :documentation

  attributes(
    :id,
    :slug,
    :title,
    :body,
    :created_at,
    :updated_at,
  )
end
