class Categories::OptionsSerializer < ApplicationSerializer
  object_as :category

  attributes :id, :name
end
