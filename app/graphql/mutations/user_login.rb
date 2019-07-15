module Mutations
	class UserLogin < Mutations::BaseMutation
		argument :auth_input, Types::AuthEmailInput, required: true

		type Types::TokenAuthType

		def resolve(auth_input:)
			user = User::TokenAuth.find_for_authentication(email: auth_input[:email])
			return unless user && user.authenticate(auth_input[:password])
			auth_token, refresh_token = user.issue_tokens

			# Set the auth token cookie
			@context[:cookies].signed[:auth_token] = {
				value: auth_token,
				httponly: true,
				expires: Rails.application.config.auth_token_expiration.from_now
			}

			# Set the refresh token cookie
			@context[:cookies].signed[:refresh_token] = {
				value: refresh_token,
				httpOnly: true,
				expires: Rails.application.config.refresh_token_expiration.from_now
			}

			{ 
				user: user, 
				auth_token: auth_token, 
				refresh_token: refresh_token
			}
		end
	end
end