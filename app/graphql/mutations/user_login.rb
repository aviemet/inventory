module Mutations
	class UserLogin < Mutations::BaseMutation
		argument :auth_input, Types::AuthEmailInput, required: true

		type Types::TokenAuthType

		def resolve(auth_input:)
			user = User::TokenAuth.find_for_authentication(email: auth_input[:email])
			return unless user && user.authenticate(auth_input[:password])
			{ 
				user: user, 
				auth_token: user.auth_token, 
				refresh_token: user.refresh_token
			}
		end
	end
end