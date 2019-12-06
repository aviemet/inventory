module Types
  class UserType < Types::BaseObject
    global_id_field :id
    field :email, String, null: false
    field :person, Types::PersonType, null: true
    field :companies, [Types::UserCompanyType], hash_key: :user_companies, null: true
  end
end
