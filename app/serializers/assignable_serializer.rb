class AssignableSerializer < ApplicationSerializer
  attributes(
    id: { type: :number },
    name: { type: :string },
  )
end
