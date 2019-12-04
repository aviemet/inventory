class JsonWebToken
	class << self

		# Encodes a token using the application secret
		# Optionaly add extra salts to secret
		def encode(payload: {}, exp: 24.hours.from_now, salt: '')
			payload[:exp] = exp.to_i
			salt += Rails.application.secrets.secret_key_base
			JWT.encode(payload, salt, 'HS256', { typ: 'JWT' })
		end

		# Decodes a token encoded using the app secret
		# Optional additional salt used during encoding
		def decode(token)
			token = JWT.decode(token, nil, false)
			return HashWithIndifferentAccess.new(token[0])
		rescue JWT::DecodeError => e
      return e.message
		end

		def valid?(token, salt: '')
			salt += Rails.application.secrets.secret_key_base
			token = JWT.decode(token, salt, true, { algorithm: 'HS256' })
			return true
		rescue JWT::DecodeError => e
			return false
		end
		
	end
end