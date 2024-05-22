class AssignableSerializer < ApplicationSerializer
  attributes(
    :created_at,
    :updated_at,
    id: { type: :number },
    name: { type: :string },
  )
end
