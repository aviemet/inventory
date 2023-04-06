class StatusLabels::EditSerializer < ApplicationSerializer
  object_as :status_label

  identifier :slug

  attributes(
    :id,
    :name,
    :status_type,
    :description,
  )
end
