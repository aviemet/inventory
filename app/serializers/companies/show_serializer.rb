class Companies::ShowSerializer < Companies::CountsSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )

  has_one :contact, serializer: ContactSerializer
end
