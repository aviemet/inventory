class Documentations::EditSerializer < ApplicationSerializer
  object_as :documentation

  identifier :slug

  attributes(
    :id,
    :slug,
    :title,
    :body,
    :documentable_id,
    :documentable_type,
  )

  # belongs_to :created_by, serializer: People::OptionsSerializer
end
