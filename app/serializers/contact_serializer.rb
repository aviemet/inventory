class ContactSerializer < ApplicationSerializer
  attributes :notes,
             :contactable_type,
             :contactable_id,
             :created_at,
             :updated_at,
             :primary_address_id,
             :primary_phone_id,
             :primary_email_id

  # view :associations do
  #   association :addresses, serializer: AddressSerializer
  #   association :emails, serializer: EmailSerializer
  #   association :phones, serializer: PhoneSerializer
  #   association :websites, serializer: WebsiteSerializer
  # end

  # view :new do
  #   excludes :notes,
  #            :contactable_type,
  #            :contactable_id,
  #            :created_at,
  #            :updated_at,
  #            :primary_address_id,
  #            :primary_phone_id,
  #            :primary_email_id

  #   association :emails, serializer: EmailSerializer, view: :new
  # end
end
