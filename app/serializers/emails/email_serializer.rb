class EmailSerializer < ApplicationSerializer
  object_as :email

  attributes :email,
             :notes,
             :contact_id,
             :category_id,
             :created_at,
             :updated_at

  association :contact, serializer: ContactSerializer
  association :category, serializer: CategorySerializer

end
