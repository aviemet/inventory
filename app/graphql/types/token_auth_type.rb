module Types
  class TokenAuthType < Types::BaseObject
    field :user, Types::UserType, null: false
    field :auth_token, String, null: true
    field :refresh_token, String, null: true
  end
end
