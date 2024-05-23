class Assignments::BasicSerializer < AssignmentSerializer
  object_as :assignment

  attributes(
    :id,
    :created_at,
    :updated_at,
  )
end
