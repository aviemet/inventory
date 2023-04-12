class ModelSerializer < ApplicationSerializer
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
end
