class Models::FormDataSerializer < ApplicationSerializer
  object_as :model

  identifier :slug

  attributes(
    :slug,
    :name,
    :model_number,
    :notes,
    :category_id,
    :manufacturer_id,
  )
end
