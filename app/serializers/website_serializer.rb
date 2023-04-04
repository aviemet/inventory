class WebsiteSerializer < ApplicationSerializer
  attributes :url,
             :name,
             :notes,
             :contact_id,
             :created_at,
             :updated_at

  # view :associations do
  #   association :activities, serializer: ActivitySerializer
  # end
end
