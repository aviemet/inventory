class Models::IndexSerializer < ApplicationSerializer
  object_as :model

  identifier :slug

  attributes(
    :id,
    :slug,
    :name,
    :model_number,
    :notes,
    :category_id,
    :manufacturer_id,
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
