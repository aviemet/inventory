class Models::EditSerializer < ApplicationSerializer
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
  )
end
