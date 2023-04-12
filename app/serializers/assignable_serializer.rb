class AssignableSerializer < ApplicationSerializer
  attributes(
    :name,
    id: { type: :number },
    name: { type: :string },
    created_at: { type: "string|Date" },
    updated_at: { type: "string|Date" },
  )
end
