module Mutations
	class UserCreate < Mutations::BaseMutation
		argument :auth_input, Types::AuthEmailInput, required: true

		type Types::UserType

		def resolve(auth_input:)
			User.create!(
				email: auth_input[:email],
				password: auth_input[:password]
			)
		end
	end
end
