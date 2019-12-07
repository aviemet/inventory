module Mutations
	class BaseMutation < GraphQL::Schema::Mutation

		def hash_to_camel_case(input)
			Hash[input.to_h.map {|k, v| [k.to_s.underscore.to_sym, v]}]
		end

		def set_auth_cookies
			return false unless @user
			auth_token, refresh_token = @user.issue_tokens
	
			# Set the auth token cookie
			@context[:cookies].signed[:auth_token] = {
				value: auth_token,
				httponly: true,
				expires: Rails.application.config.auth_token_expiration.from_now
			}
	
			# Set the refresh token cookie
			@context[:cookies].signed[:refresh_token] = {
				value: refresh_token,
				httponly: true,
				expires: Rails.application.config.refresh_token_expiration.from_now
			}
		end

	end
end
