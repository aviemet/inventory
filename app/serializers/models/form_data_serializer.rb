class Models::FormDataSerializer < ApplicationSerializer
  object_as :model

  identifier :slug

  attributes(
    :name,
    :model_number,
    :notes,
    :category_id,
    :manufacturer_id,
  )

  belongs_to :manufacturer, serializer: Manufacturers::OptionsSerializer, optional: true
  belongs_to :category, serializer: Categories::OptionsSerializer, optional: true
end
