class Models::FormDataSerializer < ApplicationSerializer
  object_as :model

  attributes(
     :name,
     :slug,
     :model_number,
     :notes,
     :category_id,
     :manufacturer_id,
   )
end
