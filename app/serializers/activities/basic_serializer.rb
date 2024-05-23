include Rails.application.routes.url_helpers

class Activities::BasicSerializer < ActivitySerializer
  type :string
  def route
    polymorphic_path(activity.trackable_type.constantize.find(activity.trackable_id), only_path: true)
  rescue StandardError
    nil
  end
end
