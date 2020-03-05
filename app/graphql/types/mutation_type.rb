module Types
  class MutationType < BaseObject

    field :user_create, mutation: Mutations::UserCreate
    field :user_login, mutation: Mutations::UserLogin

    field :company_create, mutation: Mutations::CompanyCreate
    field :company_delete, mutation: Mutations::CompanyDelete

    field :location_create, mutation: Mutations::LocationCreate
    field :location_delete, mutation: Mutations::LocationDelete

    field :department_create, mutation: Mutations::DepartmentCreate
    field :department_delete, mutation: Mutations::DepartmentDelete
  end
end
