class StatusLabels::OptionsSerializer < ApplicationSerializer
  object_as :status_label

  attributes(
    :id,
    :name,
    :status_type,
  )
end
