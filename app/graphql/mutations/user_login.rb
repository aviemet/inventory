module Mutations
	class UserLogin < BaseMutation
		argument :auth_input, Types::AuthEmailInput, required: true

		type Types::UserType

		def resolve(auth_input:)
		end
	end
end