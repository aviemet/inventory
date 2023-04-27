class Categories::OptionsSerializer < ApplicationSerializer
  object_as :category

  attributes(
    :id,
    :name,
    :category_with_type,
  )
end
