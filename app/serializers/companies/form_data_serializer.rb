class Companies::FormDataSerializer < ApplicationSerializer
  object_as :company

  attributes(
    :name,
    :default_currency,
  )

  has_one :contact, serializer: Contacts::FormDataSerializer
end
