class Assignments::ShowSerializer < AssignmentSerializer
  object_as :assignment

  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  belongs_to :created_by, serializer: People::ShowSerializer
end
