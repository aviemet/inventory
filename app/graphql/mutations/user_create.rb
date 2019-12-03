module Mutations
	class UserCreate < Mutations::BaseMutation
		argument :auth_input, Types::AuthEmailInput, required: true

		type Types::UserType

		def resolve(auth_input:)
			input = hash_to_camel_case(auth_input)
			begin
				User.create!(
					email: input[:email],
					password: input[:password]
				)
			rescue ActiveRecord::RecordInvalid => invalid
        GraphQL::ExecutionError.new("Invalid Attributes for #{invalid.record.class.name}: #{invalid.record.errors.full_messages.join(', ')}")
      end
		end
	end
end
