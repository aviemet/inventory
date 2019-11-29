module  Mutations
	class CompanyCreate < Mutations::BaseMutation
		argument :name, String, required: true
		argument :user_id, String, required: true

		type Types::CompanyType

		def resolve(name: nil, user_id: nil)
			type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(user_id)
			company = Company.create(name: name)
			owner_role = Role.find_by_name(:owner)
			user = User.find(obj_id)
			puts "User:"
			puts user
			UserCompany.create(company: company, user: user, role: owner_role)
			return company
		end
	end
end