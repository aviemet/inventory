module Types
  class UserType < BaseObject
    field :email, String, null: false
    field :person, ID, null: true
  end
end
