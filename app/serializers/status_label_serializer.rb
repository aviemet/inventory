class StatusLabelSerializer < ApplicationSerializer
  object_as :status_label

  identifier :slug

  attributes(
    :id,
    :name,
    :status_type,
    :description,
    :created_at,
    :updated_at,
  )
end
