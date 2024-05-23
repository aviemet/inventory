class Categories::OptionsSerializer < ApplicationSerializer
  object_as :category

  attributes(
    :id,
    :slug,
    :name,
    :category_with_type,
  )
end
