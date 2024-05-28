class People::BasicSerializer < PersonSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  belongs_to :user, serializer: Users::BasicSerializer
  belongs_to :department, serializer: Departments::BasicSerializer
end
