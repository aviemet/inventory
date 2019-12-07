module Mutations
	class UserCreate < Mutations::BaseMutation
		argument :auth_input, Types::AuthEmailInput, required: true

		type Types::UserType
		
		def resolve(auth_input:)
			input = hash_to_camel_case(auth_input)
			begin
				@user = User::TokenAuth.create!(
					email: input[:email],
					password: input[:password]
				)
				set_auth_cookies
				return @user
			rescue ActiveRecord::RecordInvalid => invalid
        GraphQL::ExecutionError.new("Invalid Attributes for #{invalid.record.class.name}: #{invalid.record.errors.full_messages.join(', ')}")
      end
		end
	end
end
