module Types
  class PersonType < Types::BaseObject
    field :first_name, String, null: true
    field :last_name, String, null: true
    field :department, ID, null: true
    field :contact, Types::ContactType, null: true
  end
end
