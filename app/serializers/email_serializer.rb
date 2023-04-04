class EmailSerializer < ApplicationSerializer
  attributes :email,
             :notes,
             :contact_id,
             :category_id,
             :created_at,
             :updated_at

  # view :associations do
  #   association :contact, serializer: ContactSerializer
  #   association :category, serializer: CategorySerializer
  # end

  # view :new do
  #   excludes :notes, :contact_id, :category_id
  # end
end
