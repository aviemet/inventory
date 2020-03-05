module Mutations
	class UserLogin < Mutations::BaseMutation
		argument :auth_input, Types::AuthEmailInput, required: true

		type Types::UserType

		def resolve(auth_input:)
			input = hash_to_camel_case(auth_input)
			@user = User::TokenAuth.find_for_authentication(email: input[:email])
			return GraphQL::ExecutionError.new('Incorrect Email or Password') unless @user && @user.authenticate(input[:password])
			set_auth_cookies
			return @user
		end

	end
end

