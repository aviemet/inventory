module Types
  class UserType < Types::BaseObject
    global_id_field :id
    field :email, String, null: false
    field :person, Types::PersonType, null: true
    field :companies, [Types::CompanyType], null: true
    field :user_companies, [Types::UserCompanyType], null: true
  end
end
