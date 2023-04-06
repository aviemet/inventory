class AssignableSerializer < ApplicationSerializer
  attributes(
    :name,
    :created_at,
    :updated_at,
  )
end
