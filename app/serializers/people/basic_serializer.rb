class People::BasicSerializer < PersonSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  belongs_to :user, serializer: UserSerializer
end
