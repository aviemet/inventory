module Types
  class UserType < BaseObject
    field :id, ID, null: false
    field :email, String, null: false
    # field :person, ID, null: true
  end
end
