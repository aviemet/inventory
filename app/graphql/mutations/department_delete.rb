module  Mutations
	class DepartmentDelete < Mutations::BaseMutation
		argument :id, String, required: true, loads: Types::DepartmentType

		type Types::DepartmentType

		def resolve(id:)
			id.destroy
		end

	end
end