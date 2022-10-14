class CategoryBlueprint < ApplicationBlueprint
  fields :categorizable_type,
         :name,
         :slug,
         :description,
         :created_at,
         :updated_at

  view :as_options do
    fields :id, :name
  end

  view :counts do
    field :qty do |category|
      category.records.size
    end
  end

  view :show do
    field :plural do |category|
      category.categorizable_type.pluralize
    end
  end
end
