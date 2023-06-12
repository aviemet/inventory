include Rails.application.routes.url_helpers

class Documentations::IndexSerializer < ApplicationSerializer
  object_as :documentation

  identifier :slug

  attributes(
    :id,
    :slug,
    :title,
    :body,
    :documentable_type,
    :documentable_id,
    :created_at,
    :updated_at,
  )

  type :string
  def route
    polymorphic_path(documentation.documentable_type.constantize.find(documentation.documentable_id), only_path: true)
  rescue StandardError
    nil
  end

  belongs_to :created_by, serializer: PersonSerializer
end
