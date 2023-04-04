class PhoneSerializer < ApplicationSerializer
  attributes :number,
             :extension,
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
