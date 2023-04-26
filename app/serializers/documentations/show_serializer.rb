class Documentations::ShowSerializer < ApplicationSerializer
  object_as :documentation

  identifier :slug

  attributes(
    :id,
    :slug,
    :title,
    :body,
    :created_at,
    :updated_at,
  )

  belongs_to :created_by, serializer: PersonSerializer
end
