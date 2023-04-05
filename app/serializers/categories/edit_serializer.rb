class Categories::EditSerializer < ApplicationSerializer
  object_as :category

  attributes :categorizable_type,
             :name,
             :slug,
             :description

end
