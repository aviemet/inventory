module  Mutations
	class CompanyDelete < Mutations::BaseMutation
		argument :id, String, required: true, loads: Types::CompanyType

		type Types::CompanyType

		def resolve(id:)
			id.destroy
		end

	end
end