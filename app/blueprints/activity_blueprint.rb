include Rails.application.routes.url_helpers

class ActivityBlueprint < Blueprinter::Base
  identifier :id

  fields :trackable_type,
         :trackable_id,
         :owner_type,
         :owner_id,
         :key,
         :parameters,
         :recipient_type,
         :recipient_id,
         :created_at,
         :updated_at

  view :dashboard do
    field :route do |activity|
      polymorphic_path(activity.trackable_type.constantize.find(activity.trackable_id), only_path: true)
    rescue StandardError
      nil

    end

    association :owner, blueprint: UserBlueprint

    association :person, blueprint: PersonBlueprint do |activity|
      activity.owner&.person
    end
  end

end
