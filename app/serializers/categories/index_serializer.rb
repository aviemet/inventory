class Categories::IndexSerializer < ApplicationSerializer
  object_as :category

  attributes(
    :categorizable_type,
    :name,
    :slug,
    :description,
    :created_at,
    :updated_at,
    qty: { type: :number },
  )
end
