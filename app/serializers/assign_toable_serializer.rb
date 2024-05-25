class AssignToableSerializer < ApplicationSerializer
  attributes(
    id: { type: :number },
    name: { type: :string },
  )
end
