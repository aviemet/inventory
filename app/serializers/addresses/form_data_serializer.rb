class Addresses::FormDataSerializer < ApplicationSerializer
  object_as :address

  attributes(
    :address,
    :address_2,
    :city,
    :region,
    :country,
    :postal,
    :notes,
    :contact_id,
    :category_id,
  )
end
