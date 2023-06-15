include Rails.application.routes.url_helpers

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

  type :string
  def documentable_name
    documentation.documentable&.name
  rescue StandardError
    nil
  end

  type :string
  def documentable_route
    ap({ record: documentation.documentable_type.constantize.find(documentation.documentable_id) })
    polymorphic_path(documentation.documentable_type.constantize.find(documentation.documentable_id), only_path: true)
  rescue StandardError
    nil
  end

  belongs_to :created_by, serializer: People::BasicSerializer
end
