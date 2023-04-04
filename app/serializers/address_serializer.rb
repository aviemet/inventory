class AddressSerializer < ApplicationSerializer
  attributes :address,
             :address_2,
             :city,
             :region,
             :country,
             :postal,
             :notes,
             :contact_id,
             :category_id,
             :created_at,
             :updated_at

  # view :associations do
  #   association :activities, serializer: ActivitySerializer
  #   association :contact, serializer: ContactSerializer
  #   association :category, serializer: CategorySerializer
  # end
end
