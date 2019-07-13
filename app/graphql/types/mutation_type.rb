module Types
  class MutationType < BaseObject

    field :user_create, mutation: Mutations::UserCreate
    field :user_login, mutation: Mutations::UserLogin
  end
end
