class ContactSerializer < ApplicationSerializer
  object_as :contact

  attributes(
    :id,
    :notes,
    :contactable_type,
    :contactable_id,
    :created_at,
    :updated_at,
    :primary_address_id,
    :primary_phone_id,
    :primary_email_id,
    :created_at,
    :updated_at,
  )

  has_many :addresses, serializer: AddressSerializer
  has_many :emails, serializer: EmailSerializer
  has_many :phones, serializer: PhoneSerializer
  has_many :websites, serializer: WebsiteSerializer
end
