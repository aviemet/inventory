class Models::FormDataSerializer < ApplicationSerializer
  object_as :model

  identifier :slug

  attributes(
    :name,
    :model_number,
    :notes,
    id: { optional: true },
    category_id: { optional: true },
    manufacturer_id: { optional: true },
  )
end
