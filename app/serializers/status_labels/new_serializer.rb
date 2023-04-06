class StatusLabels::NewSerializer < ApplicationSerializer
  object_as :status_label

  attributes(
    :name,
    :status_type,
    :description,
  )
end
