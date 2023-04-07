class CategorySerializer < ApplicationSerializer
  object_as :category

  attributes(
    :categorizable_type,
    :name,
    :slug,
    :description,
    :created_at,
    :updated_at,
  )
end
