module Types
	class UserCompanyType < Types::BaseObject
    global_id_field :id
		field :user, Types::UserType, null: false
		field :company, Types::CompanyType, null: false
		field :role, Types::RoleType, null: false
	end
end