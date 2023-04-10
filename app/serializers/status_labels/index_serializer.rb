class StatusLabels::IndexSerializer < ApplicationSerializer
  object_as :status_label

  identifier :slug

  attributes(
    :id,
    :slug,
    :name,
    :status_type,
    :description,
    :created_at,
    :updated_at,
  )
end
