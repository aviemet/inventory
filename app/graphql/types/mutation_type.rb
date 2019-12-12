module Types
  class MutationType < BaseObject

    field :user_create, mutation: Mutations::UserCreate
    field :user_login, mutation: Mutations::UserLogin

    field :company_create, mutation: Mutations::CompanyCreate

    field :location_create, mutation: Mutations::LocationCreate

    field :department_create, mutation: Mutations::DepartmentCreate
  end
end
