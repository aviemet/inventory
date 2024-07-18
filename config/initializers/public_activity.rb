PublicActivity::Activity.class_eval do
  has_many :all_activities, -> { includes(:activities).where(
    "(trackable_type = :type AND trackable_id = :id) OR " \
    "(recipient_type = :type AND recipient_id = :id) OR " \
    "(parameters_assign_toable_type = :type AND parameters_assign_toable_id = :id)",
    type: model.class.name,
    id: model.id,
  ) }
end
