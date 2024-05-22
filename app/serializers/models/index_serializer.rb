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

  belongs_to :manufacturer, serializer: ManufacturerSerializer
  belongs_to :category, serializer: CategorySerializer
end
