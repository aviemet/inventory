class User::TokenAuth < User::Authorization

	def auth_token(payload: {})
		JsonWebToken.encode(
			payload: payload.merge({
				uid: self.id
			}),
			exp: 2.minutes.to_i,
			salt: self.user_secret
		)
	end

	def refresh_token(payload: {})
		JsonWebToken.encode(
			payload: payload.merge({
				uid: self.id
			}),
			exp: 6.months.to_i,
			salt: self.user_secret + refresh_secret
		)
	end

	def issue_tokens
		[auth_token, refresh_token]
	end

end

  # private def aud_headers
  #   token_headers[Warden::JWTAuth.config.aud_header]
  # end

  # private def token_headers
  #   { 
  #     'Accept' => 'application/json', 
  #     'Content-Type' => 'application/json' 
  #   }
  # end

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