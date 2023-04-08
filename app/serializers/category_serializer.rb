class CategorySerializer < ApplicationSerializer
  object_as :category

  attributes(
    :id,
    :categorizable_type,
    :name,
    :slug,
    :description,
    :created_at,
    :updated_at,
    qty: { type: :number },
  )

  type :string
  def plural
    category.categorizable_type.pluralize
  end
end
