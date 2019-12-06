module  Mutations
	class CompanyCreate < Mutations::BaseMutation
		argument :name, String, required: true

		type Types::CompanyType

		def resolve(name: nil, user_id: nil)
			return false unless context[:current_user][:uid]
			
			type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(context[:current_user][:uid])
			company = Company.create(name: name)
			owner_role = Role.find_by_name(:owner)
			user = User.find(obj_id)
			UserCompany.create(company: company, user: user, role: owner_role)
			return company
		end
	end
end