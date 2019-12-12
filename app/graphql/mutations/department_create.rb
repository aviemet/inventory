module  Mutations
	class DepartmentCreate < Mutations::BaseMutation
		argument :name, String, required: true

		type Types::DepartmentType

		def resolve(name: nil)
			type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(context[:current_user][:uid])

			Department.transaction do
				User.find(obj_id).active_company.departments.create!(name: name)
			end
			
		end
	end
end