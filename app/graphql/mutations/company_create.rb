module  Mutations
	class CompanyCreate < Mutations::BaseMutation
		argument :name, String, required: true

		type Types::UserCompanyType

		def resolve(name: nil)
			type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(context[:current_user][:uid])
			owner_role = Role.find_by_name(:OWNER)
			user = User.find(obj_id)

			Company.transaction do
				company = user.companies.create!(name: name)
				if !user.active_company
					user.update!(active_company: company)
				end
				return company.user_companies.first
			end
			
		end
	end
end