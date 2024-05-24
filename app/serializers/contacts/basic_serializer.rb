class Contacts::BasicSerializer < ContactSerializer
  attributes(
    :id,
  )

  has_many :addresses, serializer: AddressSerializer
  has_many :emails, serializer: EmailSerializer
  has_many :phones, serializer: PhoneSerializer
  has_many :websites, serializer: WebsiteSerializer
end
