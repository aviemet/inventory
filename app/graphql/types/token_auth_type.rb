module Types
  class TokenAuthType < Types::BaseObject
    field :user, Types::UserType, null: false
  end
end
