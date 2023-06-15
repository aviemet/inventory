class Documentations::FormDataSerializer < ApplicationSerializer
  object_as :documentation

  identifier :slug

  attributes(
    :slug,
    :title,
    :body,
    :documentable_id,
    :documentable_type,
  )
end
