module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :email, String, null: false
    field :password, String, null: true
    field :person, ID, null: false
  end
end
