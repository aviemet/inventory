class Categories::FormDataSerializer < ApplicationSerializer
  object_as :category

  attributes(
    :categorizable_type,
    :name,
    :description,
  )
end
