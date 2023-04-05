class ContactSerializer < ApplicationSerializer
  object_as :contact

  attributes :notes,
             :contactable_type,
             :contactable_id,
             :created_at,
             :updated_at,
             :primary_address_id,
             :primary_phone_id,
             :primary_email_id,
             :created_at,
             :updated_at

  association :addresses, serializer: AddressSerializer
  association :emails, serializer: EmailSerializer
  association :phones, serializer: PhoneSerializer
  association :websites, serializer: WebsiteSerializer

end
