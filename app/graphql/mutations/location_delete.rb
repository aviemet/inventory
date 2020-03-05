module  Mutations
	class LocationDelete < Mutations::BaseMutation
		argument :id, String, required: true, loads: Types::LocationType

		type Types::LocationType

		def resolve(id:)
			id.destroy
		end

	end
end