class Categories::NewSerializer < ApplicationSerializer
  object_as :category

  attributes(
    :categorizable_type,
    :name,
    :description,
  )
end
