# == Schema Information
#
# Table name: categories
#
#  id                 :bigint           not null, primary key
#  categorizable_type :string           not null
#  description        :text
#  name               :string
#  slug               :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
# Indexes
#
#  index_categories_on_name_and_categorizable_type  (name,categorizable_type) UNIQUE
#  index_categories_on_slug                         (slug) UNIQUE
#
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
    # qty: { type: :number },
  )

  type :string
  def plural
    category.categorizable_type.pluralize
  end
end
