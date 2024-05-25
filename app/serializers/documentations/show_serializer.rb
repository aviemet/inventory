class Documentations::ShowSerializer < DocumentationSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )

  type :string
  def route
    polymorphic_path(documentation&.documentable_type&.constantize&.find(documentation&.documentable_id), only_path: true)
  rescue StandardError
    nil
  end

  belongs_to :documentable, serializer: DocumentableSerializer
  belongs_to :created_by, serializer: People::BasicSerializer
end
