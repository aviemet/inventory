class PersonGroupSerializer < ApplicationSerializer
  object_as :person_group

  identifier :slug

  attributes(
    :id,
    :name,
    :description,
    :created_at,
    :updated_at,
  )
end
