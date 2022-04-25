class ModelBlueprint < ApplicationBlueprint
  fields :id,
        :name,
        :slug,
        :model_number,
        :notes,
        :category_id,
        :manufacturer_id,
        :created_at,
        :updated_at
end
