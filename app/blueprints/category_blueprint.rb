class CategoryBlueprint < ApplicationBlueprint
  fields :id,
         :categorizable_type,
         :name,
         :slug,
         :description,
         :created_at,
         :updated_at
end
