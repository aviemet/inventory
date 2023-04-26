class Documentations::FormDataSerializer < ApplicationSerializer
  object_as :documentation

  identifier :slug

  attributes(
    :slug,
    :title,
    :body,
  )

  belongs_to :created_by, serializer: PersonSerializer
end
