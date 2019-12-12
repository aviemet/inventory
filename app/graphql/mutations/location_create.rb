module  Mutations
	class LocationCreate < Mutations::BaseMutation
		argument :name, String, required: true

		type Types::LocationType

		def resolve(name: nil)
			type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(context[:current_user][:uid])

			Location.transaction do
				User.find(obj_id).active_company.locations.create!(name: name)
			end
			
		end
	end
end