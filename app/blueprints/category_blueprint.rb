class CategoryBlueprint < ApplicationBlueprint
  fields :id,
         :categorizable_type,
         :name,
         :slug,
         :description,
         :created_at,
         :updated_at

  view :as_options do
    fields :id, :name
  end
end
