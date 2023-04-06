class Models::IndexSerializer < ApplicationSerializer
  object_as :model

  attributes :name,
             :slug,
             :model_number,
             :notes,
             :category_id,
             :manufacturer_id,
             :created_at,
             :updated_at

  attribute :count do
    model.types.size
  end

  belongs_to :manufacturer, serializer: ManufacturerSerializer
  belongs_to :category, serializer: CategorySerializer
end
