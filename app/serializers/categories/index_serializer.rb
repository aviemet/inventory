class Categories::IndexSerializer < ApplicationSerializer
  object_as :category

  attributes :categorizable_type,
             :name,
             :slug,
             :qty,
             :description,
             :created_at,
             :updated_at

end
