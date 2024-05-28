class ActivitySerializer < ApplicationSerializer
  object_as :activity, model: "PublicActivity::Activity"

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

  class UserActivitySerializer < UserSerializer
    attributes :id
  end

  class PersonActivitySerializer < PersonSerializer
    attributes :id
  end

  belongs_to :owner, serializer: UserActivitySerializer

  belongs_to :person, serializer: PersonActivitySerializer do
    activity.owner&.person
  end
end
