module  Mutations
	class CompanyCreate < Mutations::BaseMutation
		argument :name, String, required: true

		type Types::UserCompanyType

		def resolve(name: nil, user_id: nil)
			return false unless context[:current_user][:uid]

			type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(context[:current_user][:uid])
			owner_role = Role.find_by_name(:OWNER)
			user = User.find(obj_id)

			Company.transaction do
				company = Company.create!(name: name)
				userCompany = UserCompany.create!(company: company, user: user, role: owner_role)
				if !user.active_company
					user.update!(active_company: company)
				end
				return userCompany
			end
			
		end
	end
end