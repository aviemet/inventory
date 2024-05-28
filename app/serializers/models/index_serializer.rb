class Models::IndexSerializer < ModelSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )

  type :number
  def count
    model.types.size
  end

  belongs_to :manufacturer, serializer: Manufacturers::BasicSerializer
  belongs_to :category, serializer: Categories::OptionsSerializer
end
