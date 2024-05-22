class StatusLabels::OptionsSerializer < ApplicationSerializer
  object_as :status_label

  identifier :slug

  attributes(
    :id,
    :slug,
    :name,
    :status_type,
  )
end
