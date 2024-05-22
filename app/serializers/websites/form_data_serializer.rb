class Websites::FormDataSerializer < WebsiteSerializer
  attributes(
    :url,
    :name,
    :notes,
    :contact_id,
  )

  belongs_to :contact, serializer: ContactSerializer
  belongs_to :category, serializer: CategorySerializer
end
