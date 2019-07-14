module Types
  class UserType < Types::BaseObject
    field :email, String, null: false
    field :person, Types::PersonType, null: true
  end
end
