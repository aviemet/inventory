# include Rails.application.routes.url_helpers

class ActivitySerializer < ApplicationSerializer
  attributes(
    :trackable_type,
    :trackable_id,
    :owner_type,
    :owner_id,
    :key,
    :parameters,
    :recipient_type,
    :recipient_id,
    :created_at,
    :updated_at,
  )
end
