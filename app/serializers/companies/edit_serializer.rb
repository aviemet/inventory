class Companies::EditSerializer < ApplicationSerializer
  object_as :company

  attributes(
    :id,
    :slug,
    :name,
    :default_currency,
    :settings,
  )

  has_one :contact, serializer: ContactSerializer
end
