class DocumentableSerializer < ApplicationSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  type :string
  def name
    @object&.name || @object&.title || ""
  end
end
