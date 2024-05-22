class Companies::EditSerializer < Companies::FormDataSerializer
  attributes(
    :id,
    :slug,
  )

  has_one :contact, serializer: ContactSerializer
end
