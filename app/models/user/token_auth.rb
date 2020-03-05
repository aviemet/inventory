class User::TokenAuth < User::Authorization

	def auth_token(payload: {})
		JsonWebToken.encode(
			payload: payload.merge({
				uid: encoded_uid,
				companies: self.user_companies.collect { |obj| { id: obj.id, role: obj.role.name } },
				iat: Time.now.to_i
			}),
			exp: Rails.application.config.auth_token_expiration.from_now.to_i
		)
	end

	def refresh_token(payload: {})
		JsonWebToken.encode(
			payload: payload.merge({
				uid: encoded_uid,
				iat: Time.now.to_i
			}),
			exp: Rails.application.config.refresh_token_expiration.from_now.to_i,
			salt: self.user_secret
		)
	end

	def issue_tokens
		[auth_token, refresh_token]
	end

	private
	def encoded_uid
		GraphQL::Schema::UniqueWithinType.encode(User.name, self.id)
	end

end

__END__
`
This all just basically builds the payload
Look at the RFC and build payload manually
This concern should build both auth and refresh tokens

header:
alg - 
typ - JWT

payload:
iss - Issuer of the token (server uri)
aud - Audience for the JWT token ([allowed server uri])
sub - Subject (user_id)
exp - Expiration time of token
iat - Issued at