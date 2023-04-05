class CategorySerializer < ApplicationSerializer
  object_as :category

  attributes :id, :name
end
