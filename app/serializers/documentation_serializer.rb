class DocumentationSerializer < ApplicationSerializer
  object_as :documentation

  identifier :slug

  attributes(
    :slug,
    :title,
    :body,
    :created_at,
    :updated_at,
  )
end
