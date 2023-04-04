class CategorySerializer < ApplicationSerializer
  attributes :categorizable_type,
             :name,
             :slug,
             :description,
             :created_at,
             :updated_at

  # view :associations do; end

  # view :as_options do
  #   attributes :id, :name
  # end

  # view :counts do
  #   attribute :qty do |category|
  #     category.qty
  #   end
  # end

  # view :show do
  #   attribute :plural do |category|
  #     category.categorizable_type.pluralize
  #   end
  # end
end
