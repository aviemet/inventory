class StatusLabels::EditSerializer < ApplicationSerializer
  object_as :status_label

  identifier :slug

  attributes(
    :id,
    :slug,
    :name,
    :status_type,
    :description,
  )
end
