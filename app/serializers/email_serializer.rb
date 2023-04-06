class EmailSerializer < ApplicationSerializer
  object_as :email

  attributes(
    :email,
    :notes,
    :contact_id,
    :category_id,
    :created_at,
    :updated_at,
  )

  belongs_to :contact, serializer: ContactSerializer
  belongs_to :category, serializer: CategorySerializer
end
