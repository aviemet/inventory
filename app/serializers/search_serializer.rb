class SearchSerializer < ApplicationSerializer
  object_as :search, model: "PgSearch::Document"

  attributes(
    :content,
    :searchable_type,
    :searchable_id,
    :created_at,
    :updated_at,
  )

  type :string
  def name
    search.searchable&.name || search.content
  end
end
