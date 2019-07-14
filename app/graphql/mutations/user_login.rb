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

__END__
`
^So, basically we want to use the GQL mutation to send a 'sign in' request to the server with the user credentials (email, password)
^We find user by email, then check password is valid
Issue both an auth token and a refresh token
The auth token expires every 2 minutes, the refresh token expires in 6 months
Both are a jwt token with user_id and exp
auth token also has user_role
tokens are saved as cookies and in local storage on client side
Each request, tokens in cookies and local storage are compared to detect tampering
Both tokens are sent with the request
If auth token is valid, server decrypts the user_id form the payload and authenticates the request
If auth token is invlalid, server checks refresh token
If refresh token is valid, server re-issues auth token and updated refresh token with new exp
If refresh token is invalid, redirecto to login again

token salt for authentication is app_secret + user_secret
refresh token is salted with app_secret + user_secret + refresh_secret
Can invalidate refresh token by changing refresh_secret on user record
