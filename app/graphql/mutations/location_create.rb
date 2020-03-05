module  Mutations
	class LocationCreate < Mutations::BaseMutation
		argument :name, String, required: true
		argument :parent, String, required: false, loads: Types::LocationType

		type Types::LocationType

		def resolve(name: nil, parent: nil)
			puts "PARENT"
			puts parent
			type_name, user_id = GraphQL::Schema::UniqueWithinType.decode(context[:current_user][:uid])
			location = User.find(user_id).active_company.locations.build(name: name)
			location.parent = parent

			Location.transaction do
				puts "LOCATION"
				puts location.inspect
				if location.save!
					return location
				end
				raise GraphQL::ExecutionError, "Something went wrong"
			end
			
		end
	end
end