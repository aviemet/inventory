include Rails.application.routes.url_helpers

class ActivitySerializer < ApplicationSerializer
  identifier :id

  attributes :trackable_type,
             :trackable_id,
             :owner_type,
             :owner_id,
             :key,
             :parameters,
             :recipient_type,
             :recipient_id,
             :created_at,
             :updated_at

  # view :dashboard do
  #   attribute :route do |activity|
  #     polymorphic_path(activity.trackable_type.constantize.find(activity.trackable_id), only_path: true)
  #   rescue StandardError
  #     nil
  #   end

  #   association :owner, serializer: UserSerializer

  #   association :person, serializer: PersonSerializer do |activity|
  #     activity.owner&.person
  #   end
  # end

end
