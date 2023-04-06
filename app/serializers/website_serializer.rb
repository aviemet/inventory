class WebsiteSerializer < ApplicationSerializer
  attributes(
    :url,
    :name,
    :notes,
    :contact_id,
    :created_at,
    :updated_at,
  )

  has_many :activities, serializer: ActivitySerializer
  belongs_to :contact, serializer: ContactSerializer
  belongs_to :category, serializer: CategorySerializer
end
