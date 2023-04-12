class Contacts::FormDataSerializer < ApplicationSerializer
  object_as :contact

  attributes(
    :notes,
    :contactable_type,
    :contactable_id,
    :created_at,
    :updated_at,
    :primary_address_id,
    :primary_phone_id,
    :primary_email_id,
  )

  has_many :addresses, serializer: Addresses::FormDataSerializer
  has_many :emails, serializer: Emails::FormDataSerializer
  has_many :phones, serializer: Phones::FormDataSerializer
  has_many :websites, serializer: Websites::FormDataSerializer
end
