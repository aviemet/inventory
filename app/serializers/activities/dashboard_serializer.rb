include Rails.application.routes.url_helpers

class Activities::DashboardSerializer < ApplicationSerializer
  object_as :activity

  attributes(
    :id,
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

  type :string
  def route
    polymorphic_path(activity.trackable_type.constantize.find(activity.trackable_id), only_path: true)
  rescue StandardError
    nil
  end

  belongs_to :owner, serializer: UserSerializer

  belongs_to :person, serializer: PersonSerializer do
    activity.owner&.person
  end
end
