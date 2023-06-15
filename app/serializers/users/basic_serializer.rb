class Users::BasicSerializer < ApplicationSerializer
  object_as :user

  attributes(
    :id,
    :email,
    :active,
  )
end
